module.exports = {
  plugins: {
    'postcss-easy-import': {
      prefix: '_'
    },
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: {
          preserve: true
        }
      }
    },
    cssnano: {
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    },
    'postcss-nested': {}
  },
};
