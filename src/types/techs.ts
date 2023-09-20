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
  | 'monitoring'
  | 'network'
  | 'saas'
  | 'storage'
  | 'tool';

export type AllowedKeys =
  | 'adobe'
  | 'adobecommercecloud'
  | 'airbyte'
  | 'airtable'
  | 'algolia'
  | 'alibabacloud'
  | 'alpinejs'
  | 'amplitude'
  | 'angular'
  | 'ansible'
  | 'apache_airflow'
  | 'apache_cassandra'
  | 'apache_couchdb'
  | 'apache_flink'
  | 'apache_iceberg'
  | 'apache_kafka'
  | 'apache_spark'
  | 'apache_storm'
  | 'apiplatform'
  | 'appveyor'
  | 'atlassian'
  | 'auth0'
  | 'aws.amplifyhosting'
  | 'aws.apigateway'
  | 'aws.athena'
  | 'aws.cloudformation'
  | 'aws.cloudfront'
  | 'aws.cloudsearch'
  | 'aws.cloudwatch'
  | 'aws.codebuild'
  | 'aws.documentdb'
  | 'aws.dynamodb'
  | 'aws.ebs'
  | 'aws.ec2'
  | 'aws.ecr'
  | 'aws.ecs'
  | 'aws.efs'
  | 'aws.eks'
  | 'aws.elasticache'
  | 'aws.fargate'
  | 'aws.glacier'
  | 'aws.glue'
  | 'aws.kinesis'
  | 'aws.kms'
  | 'aws.lambda'
  | 'aws.lightsail'
  | 'aws.memorydb'
  | 'aws.mq'
  | 'aws.neptune'
  | 'aws.opensearch'
  | 'aws.polly'
  | 'aws.rds'
  | 'aws.redshift'
  | 'aws.rekognition'
  | 'aws.s3'
  | 'aws.sagemaker'
  | 'aws.secretsmanager'
  | 'aws.sfn'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws.timestream'
  | 'aws.translate'
  | 'aws'
  | 'azure.aks'
  | 'azure.ci'
  | 'azure.cosmosdb'
  | 'azure.mariadb'
  | 'azure.mysql'
  | 'azure.postgres'
  | 'azure.redis'
  | 'azure.sql'
  | 'azure'
  | 'bash'
  | 'betterstack'
  | 'bigcommerce'
  | 'bitbucket'
  | 'blackfire'
  | 'bootstrap'
  | 'box'
  | 'brevo'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'circleci'
  | 'cirrusci'
  | 'clickhouse'
  | 'cloudflare.pages'
  | 'cloudflare.workers'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codecov'
  | 'codesandboxci'
  | 'contenful'
  | 'couchbase'
  | 'coveralls'
  | 'cplusplus'
  | 'crowdin'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'databricks'
  | 'datadog'
  | 'dataiku'
  | 'datastax'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'discourse'
  | 'docker'
  | 'doctrinephp'
  | 'docusign'
  | 'dropbox'
  | 'dynatrace'
  | 'elasticcloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'electron'
  | 'elixir'
  | 'emberjs'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fabric'
  | 'facebook'
  | 'fastify'
  | 'fastly'
  | 'figma'
  | 'firebase.firestore'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.appengine'
  | 'gcp.artifactregistry'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.containerregistry'
  | 'gcp.dataflow'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dialogflow'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.kms'
  | 'gcp.language'
  | 'gcp.logging'
  | 'gcp.maps'
  | 'gcp.memorystore'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.spanner'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.tasks'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'gitbook'
  | 'gitguardian'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'goacmelego'
  | 'golang'
  | 'googleanalytics'
  | 'grafana'
  | 'hashicorp_vault'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'hubspot'
  | 'huggingface'
  | 'hypertune'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'klarna'
  | 'klaviyo'
  | 'koa'
  | 'koalaanalytics'
  | 'kotlin'
  | 'kubernetes'
  | 'laravel'
  | 'launchdarkly'
  | 'lemonsqueezy'
  | 'lighthouse'
  | 'logrocket'
  | 'logsnag'
  | 'magento'
  | 'mailchimp'
  | 'mailgun'
  | 'mailhog'
  | 'mailjet'
  | 'mariadb'
  | 'matomo'
  | 'meilisearch'
  | 'memcached'
  | 'meteorjs'
  | 'mithriljs'
  | 'mixpanel'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nextcloud'
  | 'nextjs'
  | 'nginx'
  | 'nodejs'
  | 'notion'
  | 'nuxtjs'
  | 'okta'
  | 'onlineornot'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'paypal'
  | 'percona'
  | 'php'
  | 'phppest'
  | 'phpstan'
  | 'phpunit'
  | 'pingdom'
  | 'pirschanalytics'
  | 'placekit'
  | 'planetscale'
  | 'platformsh'
  | 'plausible'
  | 'playwright'
  | 'postgresql'
  | 'posthog'
  | 'postman'
  | 'postmark'
  | 'powershell'
  | 'preactjs'
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
  | 'replit.database'
  | 'replit.postgres'
  | 'replit'
  | 'resend'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'salesforce'
  | 'sanity'
  | 'sap'
  | 'scaleway'
  | 'scss'
  | 'sendgrid'
  | 'sentry'
  | 'sequelize'
  | 'servicenow'
  | 'shell'
  | 'shopify'
  | 'sitecore.xmlcloud'
  | 'sitecore'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'solidjs'
  | 'sonarcloud'
  | 'sonarlint'
  | 'sonarqube'
  | 'splitio'
  | 'splunk'
  | 'sqlite'
  | 'sqreen'
  | 'squarespace'
  | 'squareup'
  | 'storybook'
  | 'strapi'
  | 'stripe'
  | 'styleci'
  | 'stylelint'
  | 'supabase.functions'
  | 'supabase.postgres'
  | 'supabase.storage'
  | 'supabase'
  | 'sveltejs'
  | 'swift'
  | 'symfony'
  | 'tailwind'
  | 'teamcity'
  | 'telegram'
  | 'tencentcloud'
  | 'terraform'
  | 'terragrunt'
  | 'tinybird'
  | 'traefik'
  | 'travisci'
  | 'trufflesecurity'
  | 'twigphp'
  | 'twilio'
  | 'twitter'
  | 'typescript'
  | 'upstash.kafka'
  | 'upstash.qstash'
  | 'upstash.redis'
  | 'upstash'
  | 'vale'
  | 'vercel.ai'
  | 'vercel.analytics'
  | 'vercel.blob'
  | 'vercel.kv'
  | 'vercel.postgres'
  | 'vercel'
  | 'vialink'
  | 'vite'
  | 'vue'
  | 'webflow'
  | 'webpack'
  | 'wiz'
  | 'woocommerce'
  | 'wordpress'
  | 'yii2'
  | 'yii2'
  | 'yousign'
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
