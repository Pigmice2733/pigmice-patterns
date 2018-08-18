module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '\\.ts$': './jest-transform',
    '\\.tsx$': './jest-transform',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  watchPathIgnorePatterns: ['components\\/[^/]*\\/dist\\/.*'],
}
