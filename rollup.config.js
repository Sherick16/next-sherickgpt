import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert { type: 'json' };
import { visualizer } from 'rollup-plugin-visualizer';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) return () => false;
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  'react/jsx-runtime'  // Important for React 17+
];

const config = [
  {   
    input: 'app/index.ts', // Your main entry point.
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ 
        extensions,
        preferBuiltins: true,
      }),
      commonjs({
        exclude: 'app/**',
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
        compilerOptions: {
          sourceMap: false,
        },
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react',
          '@babel/preset-typescript'
        ],
      }),
      postcss({
        minimize: true,
        modules: true,
        extract: false,
        inject: false,
      }),
      visualizer({
        filename: 'bundle-analysis.html',
        open: true
      })
    ],
    external: makeExternalPredicate(external),
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false
    },
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