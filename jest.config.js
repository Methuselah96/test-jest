import path from 'node:path';

export default {
  rootDir: path.resolve('.'),
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': path.resolve(import.meta.dirname, 'jestTransformer.js'),
  },
};
