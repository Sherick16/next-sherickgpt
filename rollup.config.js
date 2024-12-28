import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  {   
    input: 'app/index.ts', // Your main entry point.
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add support for TypeScript and JSX
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json', // Ensure this points to your tsconfig file
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Add React and TypeScript presets
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Handle these extensions
      }),
      postcss({
        extract: true, // Extract CSS into a separate file
        minimize: true, // Minify the CSS
        sourceMap: true,
      }),
    ],
    external: ['react', 'react-dom', 'next'],
  },
  {
    input: 'app/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts({
      tsconfig: './tsconfig.build.dts.json',  // Pointing to the new config
    })],
  },
];
