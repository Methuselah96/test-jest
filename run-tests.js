import path from 'node:path';

import jest from 'jest';

jest.run(['--config', path.resolve(import.meta.dirname, 'jest.config.js')]);
