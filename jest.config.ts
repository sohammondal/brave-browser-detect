import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "./reports/coverage",
  coverageReporters: ["json", "html"],
};

export default config;
