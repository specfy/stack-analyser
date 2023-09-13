# Contributing

## Installation

```sh
git clone https://github.com/specfy/stack-analyser.git
```

```sh
npm install
```

```sh
npm run build:watch
```

- Run the main index.js (do nothing except validate the compilation)

```sh
npm run dev
```

- Run the CLI

```sh
npm run cli
```

- Run the Test

```sh
npm run test
```

## Add a rule

- Go to folder `src/rules/`
- Pick the appropriate folder
- Create your file
- Add your rule name in `src/types/tech.ts`
- Add this file to the relative `index.ts`
- Run tests `npm run tests`
- Update the snapshots
- Commit
- Create PR named `fix(rules): add __Tech__`

### Category guidelines

- There are 13 categories (see [type](./src/types/techs.ts)). Most technology can fit more than one so pick the most appropriate or less surprising.

#### Hosting

- There is no difference between cloud and hosting.
- A compute platform is considered as hosting because technically it only hosts a container image (e.g: aws ec2, gcp gce, etc.)

#### SaaS

- SaaS can be any internet company that do not provide hosting

#### Lang folder

- Some language have their own folder (e.g: JS, PHP), it's for specific tech that only exists in those languages. For example, `phpunit` for PHP, or `Jest` for JS

### Guidelines on Rules

Provide as much dependencies as possible when creating the rule.

- Docker: <https://hub.docker.com/search?q=>
- GitHub Actions: <https://github.com/marketplace?category=&query=&type=actions&verification=>
- GO: <https://pkg.go.dev/>
- JS: <https://www.npmjs.com/>
- PHP: <https://packagist.org/>
- Ruby: <https://rubygems.org/>
- Rust: <https://crates.io/>
- Terraform: <https://registry.terraform.io/>

#### Naming

A rule name should be:

- Lowercase
- Do not have a dot `.` unless it's part of an hosting platform, e.g: `aws.lambda`
- If it's part of an ecosystem use an underscore `_`, e.g: `apache_airflow`
- If it's a common word, not broadly used across many languages or could be confused, suffix the name with the lang, e.g `doctrinephp`
- If there is an open-source package and a cloud offering, it's alright if it's not possible to distinguish those. If it's possible, create a different rule.

## Add a new language / lockfile parser?

Easiest is to follow what others spec are doing; here is the generic todo list.

- Go to folder `src/rules/spec/`
- Create your folder with the appropriate name
- Add the default rule
- Add your rule name in `src/types/tech.ts`
- Add this import in `src/rules/spec/index.ts`
- If you are parsing the lockfile (e.g: `package-lock.json`, `go.mod`)
  - Create a `lockfile.ts` with a function `detect__LANG__Lockfile()`
- If you are parsing the lockfile/declaration and you will create components (e.g: `package.json`, `docker-compose.yml`)
  - Create a `component.ts` with a function `detect__LANG__Component()`
- Add some tests
- Commit
- Create PR named `feat(rules): add support for __Tech__`

## FAQ?

### Should I create a Rule that has no way to be matched?

Yes, if the Technology is broadly known, even if they do not have dependencies or recognizable files.
