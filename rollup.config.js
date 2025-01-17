import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import image from '@rollup/plugin-image';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript'),
      }),
      resolve(),
      commonjs(),
      image(),
      terser({
        mangle: false,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'Vector2',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve(),
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript'),
      }),
      commonjs(),
      terser({
        mangle: false,
      }),
    ],
  },
];
