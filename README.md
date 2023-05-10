# Stack Analyser

This library provide a simple way to extract dependencies, and metadata from any repository and languages.

It will dive into any folders, read package.json, docker-compose.yml, go.mod, etc. Determines relationship between folders and services, and output a comprehensive list of dependencies, services and the link between them.

## Usage

```sh
npx @specfy/stack-analyser
```

```ts
import { analyser } from '@specfy/stack-analyser'
```

### Commands

#### Run on local folder

```sh
npx @specfy/stack-analyser <PATH> [--output=<filename>]
```

## Install

```sh
npm install -ED @specfy/stack-analyser
```

```ts
import { analyser, FSProvider, flatten } from "@specfy/stack-analyser"

const result = await analyser({
  provider: new FSProvider({
    path: '/my/repository/path/',
  }),
});

const json = result.toJson();

const flatten = flatten(result);
```

## Output

> Example of output when running the CLI against ./tests/__fixtures__

```json
{
  "id": "Lo8J6eL6Spyl",
  "name": "main",
  "group": "component",
  "path": [ "/" ],
  "tech": null,
  "edges": [],
  "inComponent": null,
  "childs": [
    {
      "id": "JLeNdGFoScFs",
      "name": "db",
      "group": "component",
      "path": [ "docker-compose.yml" ],
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
      "id": "Cxg6Ih3uojKa",
      "name": "fake",
      "group": "component",
      "path": [ "package.json" ],
      "tech": null,
      "edges": [],
      "inComponent": null,
      "childs": [
        {
          "id": "Xlm5pmCeLiZU",
          "name": "@fake/api",
          "group": "component",
          "path": [ "pkgs/api/package.json" ],
          "tech": null,
          "edges": [
            {
              "to": "sJrI0o0uPKbu",
              "portSource": "right",
              "portTarget": "left",
              "read": true,
              "write": true,
              "vertices": []
            }
          ],
          "inComponent": null,
          "childs": [
            {
              "id": "sJrI0o0uPKbu",
              "name": "datadog",
              "group": "thirdparty",
              "path": [ "pkgs/api/package.json" ],
              "tech": "datadog",
              "edges": [],
              "inComponent": null,
              "childs": [],
              "techs": [],
              "languages": {},
              "dependencies": []
            }
          ],
          "techs": [ "datadog", "fastify", "nodejs", "prisma", "typescript" ],
          "languages": {
            "JSON": 1
          },
          "dependencies": [
            [ "npm", "dd-trace", "1.0.1" ],
            [ "npm", "fastify", "4.17.0" ],
            [ "npm", "prisma", "4.13.0" ],
            [ "npm", "typescript", "5.0.4" ]
          ]
        },
        {
          "id": "xWkAHdSWE0Zj",
          "name": "@fake/app",
          "group": "component",
          "path": [ "pkgs/app/package.json" ],
          "tech": null,
          "edges": [],
          "inComponent": "GfhHGANwmv2p",
          "childs": [
            {
              "id": "GfhHGANwmv2p",
              "name": "vercel",
              "group": "hosting",
              "path": [ "pkgs/app/package.json" ],
              "tech": "vercel",
              "edges": [],
              "inComponent": null,
              "childs": [],
              "techs": [],
              "languages": {},
              "dependencies": []
            }
          ],
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
        }
      ],
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
      "id": "KMaBy6d6OuQy",
      "name": "redis",
      "group": "component",
      "path": [ "docker-compose.yml" ],
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
      "id": "DurTAUqSoZNe",
      "name": "unknown",
      "group": "component",
      "path": [ "docker-compose.yml" ],
      "tech": null,
      "edges": [],
      "inComponent": null,
      "childs": [],
      "techs": [],
      "languages": {},
      "dependencies": [
        [ "docker", "unknown", "7.17.5" ]
      ]
    }
  ],
  "techs": [],
  "languages": {},
  "dependencies": []
}
```
