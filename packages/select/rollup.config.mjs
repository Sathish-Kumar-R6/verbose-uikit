import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" with { type: 'json' };

export default {
  input: "src/select.tsx",
  output: [
    {
      file: "dist/select.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/select.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    postcss({
      modules: true, // Enables CSS Modules
      inject: true,  // Injects CSS into JavaScript
      minimize: true,
      sourceMap: true,
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
