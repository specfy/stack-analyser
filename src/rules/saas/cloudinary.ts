import { register } from '../../register.js';

register({
  tech: 'cloudinary',
  name: 'Cloudinary',
  type: 'saas',
  dotenv: ['CLOUDINARY_'],
  dependencies: [
    { type: 'npm', name: 'cloudinary' },
    { type: 'python', name: 'cloudinary' },
    { type: 'php', name: 'cloudinary/cloudinary_php' },
    { type: 'ruby', name: 'cloudinary' },
    { type: 'golang', name: 'github.com/cloudinary/cloudinary-go/v2' },
  ],
});
