import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  plugins: [resolve()],
  output: [
    {
      format: 'umd',
      name: 'black-spine',
      file: 'dist/black-spine.js',
      globals: {
        'black-engine': 'black-engine'
      },
    },
    {
      format: 'es',
      file: 'dist/black-spine.module.js',
      globals: {
        'black-engine': 'black-engine'
      },
    },
  ],

  external: ['black-engine']
};


