import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',  // Usando ts-jest para compilar TS para JS
  testEnvironment: 'jsdom',  // Ambiente do Jest para testar no DOM (necessário para React)
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Usar ts-jest para transformar arquivos TS/TSX
  },
  collectCoverage: true,  // Ativar cobertura de código
  coverageDirectory: 'coverage',
};

export default config;
