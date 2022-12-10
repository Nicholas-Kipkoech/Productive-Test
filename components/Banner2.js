import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";

const Banner2 = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 18,
          color: "blue",
          fontWeight: "700",
          marginTop: 10,
        }}
      >
        ✔✔✔Your Best choice with NIKE!!!✔✔✔
      </Text>
      <View
        style={{
          height: 500,
          justifyContent: "center",
          width: 400,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/iqudcrfqj45orillqncb/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="cover"
            style={{ height: 150, width: 200 }}
          />
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wbeokaxn6lbzxdd3oseo/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="cover"
            style={{ height: 150, width: 200 }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i5g871zakbxa4v4xkgeq/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="cover"
            style={{ height: 150, width: 200 }}
          />
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/axogi4pfmalcr93cqseh/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="contain"
            style={{ height: 150, width: 200 }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/pbalv56o1depw1fzhfgo/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="cover"
            style={{ height: 150, width: 200 }}
          />
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xolnue9itswrzrtyfynf/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="contain"
            style={{ height: 150, width: 200 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Banner2;
