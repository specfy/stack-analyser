# Stack Analyser

[![Main](https://github.com/specfy/stack-analyser/actions/workflows/ci.yaml/badge.svg)](https://github.com/specfy/stack-analyser/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/specfy/stack-analyser/branch/main/graph/badge.svg?token=6L5O79P9UI)](https://codecov.io/gh/specfy/stack-analyser)

This library provide a simple way to extract from any repository: dependencies, languages, infrastructure, SaaS, databases, etc.

Detect more than **+600 technologies** in your code base.

- **Full Support:** NodeJS, Docker, Typescript, PHP, Github Actions, Python, Ruby, Rust, Golang
- Partial Support: Deno, Terraform, Zig, Clojure, c, c++, c#, dart, elixir, java

Look at [all supported tech here](https://github.com/specfy/stack-analyser/tree/main/src/rules).

---

The library dives into any folders, read package.json, docker-compose.yml, go.mod, etc. Determines relationship between folders and services, and output a comprehensive list of dependencies, services and the link between them. The set of rules inside this repos allows the detection of specific technology or saas used.

It is directly used by [getstack.dev](https://getstack.dev) to create an exhaustive map of all technologies used in the open-source world.
It can be helpful for other to get all dependencies or SaaS used in a given git repository.

## CLI

```bash
npx @specfy/stack-analyser <PATH> [--output=<filename>]
```

```sh
npx @specfy/stack-analyser /my/folder
```

## Programmatic Usage

```ts
npm install -E @specfy/stack-analyser
```

```ts
import { analyser, FSProvider, flatten, rules } from "@specfy/stack-analyser"

// /!\ Load default rules
// without this no rules will be enabled by default
import '@specfy/stack-analyser/dist/autoload';

// Analyze a folder
const result = await analyser({
  provider: new FSProvider({
    path: '/my/repository/path/',
  }),
});

// Output to JSON
const json = result.toJson();

// De-nest the output and deduplicate childs
const flat = flatten(result);
```

## GitHub Actions

```yaml
- name: Stack Analyser
  uses: specfy/stack-analyser@v__VERSION__
```

## Output

> Example of output when running the CLI against ./tests/**fixtures**

The exact types `AnalyserJson` can be found [here](./src/types/index.ts)

<details>
  <summary>Output</summary>

```json
{
  "id": "44xNl6ZWgpp1",
  "name": "flatten",
  "path": ["/"],
  "tech": null,
  "edges": [],
  "inComponent": null,
  "techs": [],
  "languages": {},
  "dependencies": [],
  "childs": [
    {
      "id": "XAPpH2jgrRQq",
      "name": "@fake/api",
      "path": [
        "pkgs/api/package.json"
      ],
      "tech": null,
      "edges": [
        {
          "target": "0ijEqmU6TTVP",
          "read": true,
          "write": true
        }
      ],
      "inComponent": null,
      "childs": [],
      "techs": [ "datadog", "fastify", "nodejs", "prisma", "typescript" ],
      "languages": {
        "JSON": 1
      },
      "dependencies": [
        [ "npm","dd-trace","1.0.1" ],
        [ "npm", "fastify", "4.17.0" ],
        [ "npm", "prisma", "4.13.0" ],
        [ "npm", "typescript", "5.0.4" ]
      ]
    },
    {
      "id": "KDaUcHH5fbvW",
      "name": "@fake/app",
      "path": [
        "pkgs/app/package.json"
      ],
      "tech": null,
      "edges": [
        {
          "target": "XAPpH2jgrRQq",
          "read": true,
          "write": true
        }
      ],
      "inComponent": "MXFXwFMcCeaa",
      "childs": [],
      "techs": [ "html", "nodejs", "react", "scss", "typescript", "vercel", "vite" ],
      "languages": {
        "JSON": 1,
        "HTML": 1,
        "SCSS": 1
      },
      "dependencies": [
        [ "npm", "@fake/api", "1.0.0" ],
        [ "npm", "react", "4.17.0" ],
        [ "npm", "typescript", "5.0.4" ],
        [ "npm", "vite", "4.3.3" ]
      ]
    },
    {
      "id": "GiMSHgVZxp0w",
      "name": "GCP",
      "path": [
        "terraform/.terraform.lock.hcl"
      ],
      "tech": "gcp",
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": [
        [ "terraform", "registry.terraform.io/hashicorp/google", "4.61.0" ]
      ]
    },
    {
      "id": "0ijEqmU6TTVP",
      "name": "datadog",
      "path": [
        "pkgs/api/package.json"
      ],
      "tech": "datadog",
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": []
    },
    {
      "id": "PLIJw7dSPiYm",
      "name": "db",
      "path": [
        "docker-compose.yml"
      ],
      "tech": "postgresql",
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": [
        [ "docker", "postgres", "14.5-alpine" ]
      ]
    },
    {
      "id": "qx9C1IK1eyqQ",
      "name": "fake",
      "path": [
        "package.json"
      ],
      "tech": null,
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [ "docker", "eslint", "nodejs", "prettier", "terraform", "typescript" ],
      "languages": {
        "YAML": 1,
        "JSON": 1,
        "HCL": 1
      },
      "dependencies": [
        [ "npm", "@typescript-eslint/eslint-plugin", "5.57.1" ],
        [ "npm", "@typescript-eslint/parser", "5.57.1" ],
        [ "npm", "eslint", "8.39.0" ],
        [ "npm", "prettier", "2.8.7" ],
        [ "npm", "typescript", "4.9.5" ]
      ]
    },
    {
      "id": "Z7w2sPVvm4uv",
      "name": "redis",
      "path": [
        "docker-compose.yml"
      ],
      "tech": "redis",
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": [
        [ "docker", "redis", "7.0.4-alpine" ]
      ]
    },
    {
      "id": "UNzMqaOoqExN",
      "name": "unknown",
      "path": [
        "docker-compose.yml"
      ],
      "tech": null,
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": [
        [ "docker", "unknown", "7.17.5" ]
      ]
    },
    {
      "id": "MXFXwFMcCeaa",
      "name": "vercel",
      "path": [
        "pkgs/app/package.json",
        "terraform/.terraform.lock.hcl"
      ],
      "tech": "vercel",
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [ "vercel"],
      "languages": {},
      "dependencies": [
        [ "terraform", "registry.terraform.io/vercel/vercel", "4.61.0" ]
      ]
    }
  ]
}
```

</details>

## Contributing

Every contribution is welcome. Check our [Contributing](./CONTRIBUTING.md) guide.

## Versioning

There are 2 things versioned in this package:

- the API
- the Data extraction.

The **API is following semver**:

- Breaking changes in the API will result in a new MAJOR.
- Anything else will result in a MINOR `feat`, or a PATCH `fix`

The **Data is following semver without MAJOR**:

- Breaking changes in the Data will result in a new MINOR. A breaking change can be: removal of a tech, change in the tech category, removal of pattern for a tech, new data sources. `feat(rules)`
- Anything else will result in a PATCH `fix(rules)`
