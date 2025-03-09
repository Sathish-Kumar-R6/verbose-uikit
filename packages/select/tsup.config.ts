import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/select.tsx'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  external: ['react', 'react-dom'],
  noExternal: [],
  loader: {
    '.css': 'copy',
  },
});
