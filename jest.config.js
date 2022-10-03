const { pathsToModuleNameMapper } = require('ts-jest/');
const { compilerOptions } = require('./tsconfig.json');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
    '\\.(css)$': 'identity-obj-proxy',
  },
};
