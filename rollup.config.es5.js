import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import builtins from '@joseph184/rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";
import miniprogram from 'rollup-plugin-miniprogram';
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: 'src/entry/index.ts',
  output: [
    // umd模式，打包所有的依赖，可供浏览器直接使用
    {
      name: 'hold-runner',
      file: 'dist/hold-runner.dev.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd模式，压缩后，打包所有的依赖，可供浏览器直接使用
    {
      name: 'hold-runner',
      file: 'dist/hold-runner.min.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd模式，压缩后，打包所有的依赖，供小程序使用
    {
      name: 'hold-runner',
      file: 'dist/hold-runner.miniprogram.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    // umd模式，压缩后，打包所有的依赖，供小程序使用
    {
      name: 'hold-runner',
      file: 'dist/hold-runner.miniprogram.min.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
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
      configFile: path.resolve(__dirname, './.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      extensions: [".ts"],
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
    miniprogram(),
  ],
};
