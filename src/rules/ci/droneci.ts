import { register } from '../../register.js';

register({
  tech: 'droneci',
  name: 'DroneCI',
  type: 'ci',
  files: ['.drone.yml'],
  dependencies: [{ type: 'docker', name: 'drone/drone' }],
});
