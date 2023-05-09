import { analyser } from './analyser/index.js';
import {
  listIndexed as listTechIndexed,
  list as listTech,
} from './common/techs.js';
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
  detectDependencies,
  rawList,
  dependencies,
} from './rules.js';
import { Analyser, ComponentGroup } from './types/index.js';
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
  BaseProvider,
  ComponentGroup,
  ComponentMatcher,
  FakeProvider,
  FSProvider,
  FSProviderOptions,
  GithubAPIProvider,
  GithubAPIProviderOptions,
  Rule,
  RuleDependency,
  RuleWithFile,
  SupportedDeps,
  TechMatcher,
  TechType,
  TechItem,
};

export { analyser };

export { Payload };

export { register, detectDependencies, rawList, dependencies };

export { listTechIndexed, listTech };
