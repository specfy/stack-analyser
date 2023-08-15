/* eslint-disable import/extensions */
import { analyser } from './analyser/index.js';
import { listIndexed, listTech } from './common/techs.generated.js';
import {
  rawList,
  dependencies as dependenciesList,
  loadAllRules,
  loadOne,
} from './loader.js';
import { matchDependencies } from './matchDependencies.js';
import {
  flatten,
  findEdgesInDependencies,
  findHosting,
  findImplicitComponent,
} from './payload/helpers.js';
import { Payload } from './payload/index.js';
import { BaseProvider } from './provider/base.js';
import { FakeProvider } from './provider/fake.js';
import { FSProvider, FSProviderOptions } from './provider/fs.js';
import { register, registeredRules, registeredTech } from './register.js';
import { Analyser, AnalyserJson } from './types/index.js';
import {
  SupportedDeps,
  RuleDependency,
  Rule,
  RuleWithFile,
  ComponentMatcher,
  TechMatcher,
} from './types/rule.js';
import { TechType, AllowedKeys, TechItem } from './types/techs.js';

export {
  AllowedKeys,
  Analyser,
  AnalyserJson,
  BaseProvider,
  ComponentMatcher,
  FakeProvider,
  FSProvider,
  FSProviderOptions,
  Payload,
  Rule,
  RuleDependency,
  RuleWithFile,
  SupportedDeps,
  TechItem,
  TechMatcher,
  TechType,
};

export {
  analyser,
  flatten,
  findEdgesInDependencies,
  findHosting,
  findImplicitComponent,
};

export const rules = {
  register,
  list: registeredRules,
  loadAllRules,
  loadOne,
};
export const dependencies = {
  detect: matchDependencies,
  raw: rawList,
  list: dependenciesList,
};

export const tech = {
  indexed: listIndexed,
  list: listTech,
  keys: registeredTech,
};
