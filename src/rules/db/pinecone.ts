import { register } from '../../register.js';

register({
  tech: 'pinecone',
  name: 'Pinecone',
  type: 'db',
  dotenv: ['PINECONE_'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/pinecone-io/pinecone' },
    { type: 'python', name: 'pinecone' },
    { type: 'npm', name: '@pinecone-database/pinecone' },
    { type: 'golang', name: 'github.com/pinecone-io/go-pinecone/v3/pinecone' },
    { type: 'rust', name: 'pinecone-sdk' },
    { type: 'terraform.resource', name: 'airbyte_destination_pinecone' },
  ],
});
