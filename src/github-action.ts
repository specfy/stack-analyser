import core from '@actions/core';

try {
  const token = core.getInput('token', {
    required: true,
  });
  console.log('hello', token);
} catch (error: unknown) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error');
  }
}
