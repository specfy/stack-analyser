import fs from 'node:fs/promises';
import path from 'node:path';

import { listIndexed } from '../common/techs.generated.js';

import type { Payload } from '../payload/index.js';
import type { TechType } from '../types/techs.js';

export const supportedAIs = ['cursor', 'claude', 'gemini'] as const;

export interface AIRuleContent {
  techs: { name: string; tech: string; type?: string }[];
  languages: { name: string; count: number }[];
  dependencies: string[];
  components: { name: string; tech?: string; techName?: string }[];
}

const groupDefinitions: Record<TechType, { title: string; description: string }> = {
  ai: {
    title: 'AI',
    description: 'To use AI features, this repository is using the following tools: ',
  },
  analytics: {
    title: 'Analytics',
    description: 'To track usage and metrics, this repository is using the following tools: ',
  },
  api: { title: 'API', description: 'API tools' },
  app: { title: 'App', description: 'App tools' },
  auth: {
    title: 'Authentication',
    description: 'To authenticate users, this repository is using the following tools: ',
  },
  automation: {
    title: 'Automation',
    description: 'To automate tasks, this repository is using the following tools: ',
  },
  builder: {
    title: 'Bundler & Build Tools',
    description:
      'To build the project and bundle the assets, this repository is using the following tools: ',
  },
  ci: {
    title: 'CI',
    description: 'To run CI/CD pipelines, this repository is using the following tools: ',
  },
  cloud: {
    title: 'Cloud',
    description: 'The production instance is hosted on the following cloud services: ',
  },
  cms: { title: 'CMS', description: 'The content is managed using the following CMS: ' },
  collaboration: {
    title: 'Collaboration',
    description: 'The project is connected to the following collaboration tools: ',
  },
  communication: {
    title: 'Communication',
    description:
      'To send, receive messages or notifications, or to communicate with others, the repository is using the following services: ',
  },
  monitoring: {
    title: 'Monitoring',
    description:
      'To do tracing, metrics, logging and moniroting, this repository is using the following tools: ',
  },
  network: {
    title: 'Network',
    description: 'This project is using the following network services: ',
  },
  notification: {
    title: 'Notification',
    description:
      'To send notifications, the repository is using the following notification service: ',
  },
  orm: { title: 'ORM', description: 'The database is managed using the following ORM:' },
  package_manager: {
    title: 'Package Manager',
    description: 'The project is using the following package manager: ',
  },
  payment: {
    title: 'Payment',
    description: 'To process payments, the repository is using the following payment provider: ',
  },
  queue: {
    title: 'Queue',
    description: 'To process messages, the repository is using the following queue service: ',
  },
  runtime: { title: 'Runtime', description: 'This project is using the following runtime: ' },
  saas: {
    title: 'SaaS',
    description: 'This project is connected to the following SaaS services: ',
  },
  security: {
    title: 'Security',
    description: 'To secure the project, the repository is using the following tools: ',
  },
  ssg: { title: 'SSG', description: 'The static site is generated using the following tool: ' },
  storage: {
    title: 'Storage',
    description: 'This project is using the following storage services: ',
  },
  test: {
    title: 'Test',
    description: 'To test the code, the repository is using the following tools: ',
  },
  tool: { title: 'Tool', description: 'The repository is also using the following tools: ' },
  ui_framework: {
    title: 'UI Framework',
    description: 'The user interface is built using the following framework: ',
  },
  ui: { title: 'UI', description: 'The user interface is built using the following tools: ' },
  validation: {
    title: 'Validation',
    description: 'To validate the data, the repository is using the following tools: ',
  },
  crm: { title: 'CRM', description: 'The project is connected to the following CRM: ' },
  db: { title: 'Database', description: 'The project is using the following databases: ' },
  etl: { title: 'ETL', description: 'The project is using the following ETL tools: ' },
  framework: { title: 'Framework', description: 'The project is using the following framework: ' },
  hosting: {
    title: 'Hosting',
    description: 'The project is hosted on the following hosting service: ',
  },
  iac: { title: 'IaC', description: 'The project is using the following IaC tools: ' },
  iconset: { title: 'Iconset', description: 'The project is using the following icon libraries: ' },
  language: { title: '', description: ' ' },
  linter: {
    title: 'Linter',
    description: 'To lint the code, the repository is using the following tools: ',
  },
  maps: { title: 'Maps', description: 'The project is using the following map services: ' },
  messaging: {
    title: 'Messaging',
    description: 'The project is using the following messaging services: ',
  },
};

export function generateAIRuleContent(payload: Payload): string {
  const content: string[] = [
    '# Repository Stack',
    '',
    '> This file was automatically generated by @specfy/stack-analyser',
    '',
    '## Overview',
    '',
    'This document summarizes the technologies used in the repository. The list is not exhaustive, and may not include all technologies used in the repository.',
    '',
  ];

  if (Object.keys(payload.languages).length > 0) {
    content.push('## Programming Languages', '');
    const languages = [];
    const ignoredLanguages = new Set(['JSON', 'YAML']);
    for (const lang of Object.keys(payload.languages)) {
      if (ignoredLanguages.has(lang)) {
        continue;
      }
      languages.push(lang);
    }
    content.push(
      `This repository uses the following programming languages: ${languages.join(', ')}`,
      'Do not use other programming languages than the ones listed here, unless explicitly asked.',
      ''
    );
  }

  if (payload.techs.size > 0) {
    const groups = new Map<TechType, string[]>();
    for (const tech of payload.techs) {
      const ref = listIndexed[tech];
      if (ref.type === 'language') {
        continue;
      }

      const group = groups.get(ref.type) || [];
      group.push(ref.name);
      groups.set(ref.type, group);
    }

    for (const [group, techs] of groups.entries()) {
      const def = groupDefinitions[group];
      content.push(`## ${def.title}`, '', def.description, '');
      for (const tech of techs) {
        content.push(`- ${tech}`);
      }
      content.push('');
    }
  }

  return content.join('\n');
}

export interface SaveAIRulesOptions {
  content: string;
  aiList: string[];
  outputDir: string;
}

const aiRules: Record<string, { format: (content: string) => string; filename: string }> = {
  cursor: { format: formatCursorRules, filename: '.cursor/rules/tech-stack.mdc' },
  claude: { format: formatClaudeRules, filename: '.claude/rules/tech-stack.md' },
  gemini: { format: formatGeminiRules, filename: '.gemini/tech-stack.md' },
};

function formatCursorRules(content: string): string {
  const base: string[] = [
    '---',
    'description: Stack analysis rules generated from detected technologies',
    'alwaysApply: true',
    '---',
    content,
  ];
  return base.join('\n');
}

function formatClaudeRules(content: string): string {
  return content;
}

function formatGeminiRules(content: string): string {
  return content;
}

export async function saveAIRules({
  content,
  aiList,
  outputDir,
}: SaveAIRulesOptions): Promise<void> {
  for (const ai of aiList) {
    if (!(ai in aiRules)) {
      continue;
    }

    const formatted = aiRules[ai].format(content);
    const filepath = path.join(outputDir, aiRules[ai].filename);
    await fs.writeFile(filepath, formatted, 'utf8');
  }
}
