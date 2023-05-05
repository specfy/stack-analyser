import { analyser } from './analyser';
import {
  listIndexed as listTechIndexed,
  list as listTech,
} from './common/techs';
import { Payload } from './payload';
import { BaseProvider } from './provider/base';
import { FakeProvider } from './provider/fake';
import { FSProvider, FSProviderOptions } from './provider/fs';
import {
  GithubAPIProvider,
  GithubAPIProviderOptions,
} from './provider/githubApi';
import { register, detectDependencies, rawList, dependencies } from './rules';
import { Analyser, ComponentGroup } from './types';
import {
  SupportedDeps,
  RuleDependency,
  Rule,
  RuleWithFile,
  ComponentMatcher,
  TechMatcher,
} from './types/rule';
import { TechType, AllowedKeys, TechItem } from './types/techs';

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
