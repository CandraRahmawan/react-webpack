module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js}'],
  verbose: true,
  bail: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 20,
      lines: 15,
      statements: 15,
    },
  },
  transform: {
    '\\.txt$': 'jest-raw-loader',
    '\\.js$': 'babel-jest',
  },
  coverageDirectory: '__coverage__',
  rootDir: '../',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileTransformer.js',
    '^.+\\.js?$': 'babel-jest',
    '\\.txt$': 'jest-raw-loader',
  },
  transformIgnorePatterns: ['node_modules/(?!antd)'],
};
