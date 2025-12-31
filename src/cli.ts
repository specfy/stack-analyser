#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import timer from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

import { Command } from 'commander';
import figureSet from 'figures';
import kleur from 'kleur';
import ora from 'ora';

import { generateAIRuleContent, saveAIRules, supportedAIs } from './ai-rules/index.js';
import { analyser } from './analyser/index.js';
import { l } from './common/log.js';
import { flatten } from './payload/helpers.js';
import { FSProvider } from './provider/fs.js';

import './autoload.js';

const program = new Command();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
// eslint-disable-next-line unicorn/no-await-expression-member
const pkg = JSON.parse((await fs.readFile(path.join(dirname, './../package.json'))).toString()) as {
  version: string;
};

program
  .name('stack-analyser')
  .description('CLI to extract metadata from repository')
  .argument('<path>', 'repository to analyze')
  .option('-o, --output <FILENAME>', 'output json to a file', 'output.json')
  .option('--flat', 'flatten the output', false)
  .option('--ai <AIS>', 'output AI rules instead (comma-separated: cursor,claude,gemini)')
  .version(pkg.version)
  .action(async (arg: string, options: { output?: string; flat: boolean; ai?: string }) => {
    const pathAtExecution = process.cwd();
    const root = path.isAbsolute(arg) ? arg : path.join(pathAtExecution, arg);

    l.debug('Version', pkg.version);

    try {
      const stat = await fs.stat(root);
      if (!stat.isDirectory()) {
        l.log(kleur.bold().red(figureSet.cross), `Path "${root}" is not a folder`);
        process.exit(1);
      }
    } catch {
      l.log(kleur.bold().red(figureSet.cross), `Path "${root}" does not exist`);
      process.exit(1);
    }

    l.log(kleur.bold().magenta(figureSet.triangleRight), 'Path', kleur.cyan(root));

    const spinner = ora(`Analysing`).start();

    await timer.setTimeout(100);
    const res = await analyser({
      provider: new FSProvider({ path: root, ignorePaths: [] }),
    });
    spinner.succeed('Analysed');

    if (options.ai) {
      const aiList = options.ai
        .split(',')
        .map((ai) => ai.trim().toLowerCase()) as (typeof supportedAIs)[number][];
      const invalidAIs = aiList.filter((ai) => !supportedAIs.includes(ai));
      if (invalidAIs.length > 0) {
        l.log(
          kleur.bold().red(figureSet.cross),
          `Invalid AI names: ${invalidAIs.join(', ')}. Valid options: ${supportedAIs.join(', ')}`
        );
        process.exit(1);
      }

      const output = options.flat ? flatten(res, { merge: true }) : res;
      const content = generateAIRuleContent(output);
      await saveAIRules({ content, aiList, outputDir: pathAtExecution });

      l.log('');
    }

    if (options.output) {
      const output = options.flat ? flatten(res, { merge: true }) : res;
      const file = path.join(pathAtExecution, options.output);
      await fs.writeFile(file, JSON.stringify(output.toJson(root), undefined, 2));
      l.log('');
      l.log('Output', kleur.green(file));
    }
  });

program.parse(process.argv);
