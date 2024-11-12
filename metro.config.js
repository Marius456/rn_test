const { withRNVMetro } = require('@rnv/adapter');

// module.exports = withRNVMetro({});

const {
    wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');


module.exports = wrapWithReanimatedMetroConfig(withRNVMetro({}));