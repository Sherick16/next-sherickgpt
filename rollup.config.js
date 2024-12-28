import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const config = [
  {   
    input: 'app/index.ts', // Your main entry point.
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      postcss({
        minimize: true,
        modules: true,
        extract: false,
      }),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
  },
  {
    input: 'app/index.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts({
      tsconfig: './tsconfig.build.dts.json',
    })],
    external: [/\.css$/],
  },
];

export default config;