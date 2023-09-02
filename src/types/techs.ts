export type TechType =
  | 'analytics'
  | 'api'
  | 'app'
  | 'ci'
  | 'db'
  | 'etl'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'network'
  | 'saas'
  | 'storage'
  | 'tool';

export type AllowedKeys =
  | 'adobe'
  | 'algolia'
  | 'alibabacloud'
  | 'angular'
  | 'appveyor'
  | 'atlassian'
  | 'auth0'
  | 'aws.dynamodb'
  | 'aws.ec2'
  | 'aws.elasticache'
  | 'aws.glacier'
  | 'aws.lambda'
  | 'aws.rds'
  | 'aws.s3'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws'
  | 'azure.ci'
  | 'azure'
  | 'bash'
  | 'bootstrap'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'cassandra'
  | 'circleci'
  | 'cirrusci'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codesandboxci'
  | 'couchbase'
  | 'cplusplus'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'datadog'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'docker'
  | 'dropbox'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'elixir'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fastify'
  | 'fastly'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.language'
  | 'gcp.maps'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'golang'
  | 'googleanalytics'
  | 'hashicorp_vault'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'hubspot'
  | 'huggingface'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'logrocket'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'memcached'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nginx'
  | 'nodejs'
  | 'okta'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'percona'
  | 'php'
  | 'pingdom'
  | 'placekit'
  | 'platformsh'
  | 'postgresql'
  | 'powershell'
  | 'prettier'
  | 'prisma'
  | 'prismacloud'
  | 'puppeteer'
  | 'python'
  | 'rabbitmq'
  | 'react'
  | 'reactemail'
  | 'redis'
  | 'relativeci'
  | 'render'
  | 'renovate'
  | 'resend'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'salesforce'
  | 'scaleway'
  | 'scss'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'shopify'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'splunk'
  | 'sqlite'
  | 'sqreen'
  | 'squareup'
  | 'storybook'
  | 'strapi'
  | 'styleci'
  | 'stylelint'
  | 'supabase.functions'
  | 'supabase.postgres'
  | 'supabase.storage'
  | 'supabase'
  | 'swift'
  | 'tailwind'
  | 'teamcity'
  | 'terraform'
  | 'terragrunt'
  | 'traefik'
  | 'travisci'
  | 'typescript'
  | 'vercel'
  | 'vite'
  | 'vue'
  | 'webpack'
  | 'zapier'
  | 'zendesk'
  | 'zookeeper'
  | 'zoom'
  | 'zuora';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
