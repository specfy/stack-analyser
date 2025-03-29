import { detectLang, rawList as languageList } from './common/languages.js';
import { listIndexed, listTech } from './common/techs.generated.js';
import { dependencies as dependenciesList, loadAllRules, loadOne, rawList } from './loader.js';
import { matchAllFiles } from './matchAllFiles.js';
import { matchDependencies } from './matchDependencies.js';
import { register, registeredRules, registeredTech } from './register.js';

export const rules = {
  register,
  list: registeredRules,
  loadAll: loadAllRules,
  loadOne,
};
export const dependencies = {
  detect: matchDependencies,
  raw: rawList,
  list: dependenciesList,
};

export const tech = {
  detectInFileList: matchAllFiles,
  indexed: listIndexed,
  list: listTech,
  keys: registeredTech,
};

export const lang = {
  detect: detectLang,
  list: languageList,
};

export { analyser } from './analyser/index.js';
export type { LangListItem } from './common/languages.js';
export {
  findEdgesInDependencies,
  findHosting,
  findImplicitComponent,
  flatten,
} from './payload/helpers.js';
export { Payload } from './payload/index.js';

export type { BaseProvider, ProviderFile } from './provider/base.js';
export { FakeProvider } from './provider/fake.js';
export type { FSProviderOptions } from './provider/fs.js';
export { FSProvider } from './provider/fs.js';
export type { Analyser, AnalyserJson, Dependency, GraphEdge } from './types/index.js';

export type { SupportedDeps } from './types/rule.js';
export type {
  ComponentMatcher,
  Rule,
  RuleDependency,
  RuleWithFile,
  TechMatcher,
} from './types/rule.js';
export type { AllowedKeys, TechItem, TechType } from './types/techs.js';
