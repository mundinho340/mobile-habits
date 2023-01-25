const { getDefaultConfig } = require("expo/metro-config");


module.exports =(() => {

    const config= getDefaultConfig(__dirname)

    const { tranformer, resolver } = config

    config.tranformer ={
        ...tranformer,
        bubelTransformerPath: require.resolve("react-native-svg-transformer"),
    }

    config.resolver ={
        ...resolver,
        assatExts: resolver.assetExts.filter((ext)=> ext !== "svg"),
        sourceExts: [...resolver.sourceExts, "svg"],
    }

    return config
})()