#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import timer from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

import { Command } from 'commander';
import figures from 'figures';
import kleur from 'kleur';
import ora from 'ora';

import { analyser } from './analyser/index.js';
import { l } from './common/log.js';
import { flatten } from './payload/helpers.js';
import { FSProvider } from './provider/fs.js';

import './autoload.js';

const program = new Command();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const pkg = JSON.parse(
  (await fs.readFile(path.join(dirname, './../package.json'))).toString()
);

program
  .name('stack-analyser')
  .description('CLI to extract metadata from repository')
  .argument('<path>', 'repository to analyse')
  .option('-o, --output <FILENAME>', 'output json to a file', 'output.json')
  .option('--flat', 'flatten the output', false)
  .version(pkg.version)
  .action(async (arg, options) => {
    const pathAtExecution = process.cwd();
    const root = path.isAbsolute(arg) ? arg : path.join(pathAtExecution, arg);

    l.debug('Version', pkg.version);

    try {
      const stat = await fs.stat(root);
      if (!stat.isDirectory()) {
        l.log(
          kleur.bold().red(figures.cross),
          `Path "${root}" is not a folder`
        );
        process.exit(1);
      }
    } catch (e) {
      l.log(kleur.bold().red(figures.cross), `Path "${root}" does not exist`);
      process.exit(1);
    }

    l.log(
      kleur.bold().magenta(figures.triangleRight),
      'Path',
      kleur.cyan(root)
    );

    const spinner = ora(`Analysing`).start();

    await timer.setTimeout(500);
    const res = await analyser({
      provider: new FSProvider({ path: root, ignorePaths: [] }),
    });
    spinner.succeed('Analysed');

    if (options.output) {
      const output = options.flat ? flatten(res) : res;
      const file = path.join(pathAtExecution, options.output);
      await fs.writeFile(
        file,
        JSON.stringify(output.toJson(root), undefined, 2)
      );
      l.log('');
      l.log('Output', kleur.green(file));
    }
  });

program.parse(process.argv);
