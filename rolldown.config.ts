import {defineConfig} from 'rolldown';

export default defineConfig({
  input: 'index.ts',
  treeshake: true,
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true
    }
  ]
});
