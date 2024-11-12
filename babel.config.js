// const { withRNVBabel } = require('@rnv/adapter');

// module.exports = withRNVBabel({});

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin'],
};