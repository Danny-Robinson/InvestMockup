module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  modulePaths: [
    "src",
    "test"
],
};
