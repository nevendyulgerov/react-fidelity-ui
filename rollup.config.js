import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssEasyImport from 'postcss-easy-import';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNested from 'postcss-nested';

import pkg from './package.json';

export default [{
  input: 'src/css/index.css',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
      export: './dist',
      sourceMap: true,
      extract: true,
      modules: {
        scopeBehaviour: 'global'
      },
      plugins: [
        postcssEasyImport({
          prefix: '_'
        }),
        postcssImport,
        postcssCustomMedia,
        postcssPresetEnv({
          browsers: ['last 2 versions', '> 5%'],
          features: {
            customProperties: {
              preserve: true
            }
          }
        }),
        postcssNested
      ]
    })
  ]
}, {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      exclude: '**/__tests__/**',
      clean: true,
      rollupCommonJSResolveHack: true
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/prop-types/index.js': [
          'any',
          'array',
          'bool',
          'func',
          'number',
          'object',
          'string',
          'node',
          'element',
          'symbol',
          'elementType',
          'instanceOf',
          'oneOf',
          'oneOfType',
          'arrayOf',
          'objectOf',
          'shape',
          'exact'
        ],
        'node_modules/tlite/index.js': [
          'show',
          'hide'
        ]
      }
    })
  ]
}];
