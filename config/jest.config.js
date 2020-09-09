const path = require('path');

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  rootDir: path.resolve(__dirname, '../'),
  testRegex: '\/__tests__\/.*(\\.|\/)(test|spec)\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(__dirname, '../config/tsconfig.json'),
    },
  },
  testPathIgnorePatterns: [path.resolve(__dirname, '../src/utils/pageEvaluate')],
};
