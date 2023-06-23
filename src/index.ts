import { analyser } from './analyser/index.js';
import {
  listIndexed as listTechIndexed,
  list as listTech,
} from './common/techs.js';
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
import {
  GithubAPIProvider,
  GithubAPIProviderOptions,
} from './provider/githubApi.js';
import {
  register,
  detect,
  rawList,
  dependencies as dependenciesList,
} from './rules.js';
import { Analyser, AnalyserJson, ComponentGroup } from './types/index.js';
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
  ComponentGroup,
  ComponentMatcher,
  FakeProvider,
  FSProvider,
  FSProviderOptions,
  GithubAPIProvider,
  GithubAPIProviderOptions,
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

export const dependencies = {
  register,
  detect,
  raw: rawList,
  list: dependenciesList,
};

export const tech = { indexed: listTechIndexed, list: listTech };
