/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: "<rootDir>/src/__test__/globalSetup.ts",
  globalTeardown: "<rootDir>/src/__test__/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setup.ts"],
};
