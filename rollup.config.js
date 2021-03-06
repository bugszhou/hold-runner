import path from "path";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import builtins from "@joseph184/rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import { terser } from "rollup-plugin-terser";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  external: [],
  input: "src/entry/index.ts",
  output: [
    // umd，第三方依赖未打包
    {
      name: "hold-runner",
      file: "dist/hold-runner.js",
      format: "umd",
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd压缩后，第三方依赖未打包
    {
      name: "hold-runner",
      file: "dist/hold-runner.common.js",
      format: "umd",
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // 使用es6 import语法
    {
      file: "dist/hold-runner.esm.js",
      format: "esm",
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    json(),
    commonjs(),
    resolve(),
    builtins(),
    globals(),
    rollupTypescript(),
    babel({
      configFile: path.resolve(__dirname, "./.babelrc"),
      runtimeHelpers: true,
      exclude: "node_modules/**",
      extensions: [".ts"],
    }),
    terser({
      include: [/^.+\.common\.js$/],
    }),
  ],
  watch: {
    clearScreen: true,
    include: "src/**",
  },
};
