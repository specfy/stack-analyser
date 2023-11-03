import { register } from '../../../register.js';

import { detectPythonLockfile } from './lockfile.js';

register({
  tech: 'python',
  name: 'Python',
  type: 'language',
  files: ['requirements.txt'],
  extensions: [
    '.py',
    '.gyp',
    '.py3',
    '.pyde',
    '.pyi',
    '.pyp',
    '.pyt',
    '.pyw',
    '.rpy',
  ],
  dependencies: [
    { type: 'githubAction', name: 'actions/setup-python' },
    { type: 'docker', name: 'python' },
    { type: 'docker', name: 'circleci/python' },
    { type: 'docker', name: 'cimg/python' },
    { type: 'docker', name: 'bitnami/python' },
  ],
  detect: [detectPythonLockfile],
});
