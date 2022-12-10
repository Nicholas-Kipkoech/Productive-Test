import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Banner3 = () => {
  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View
          style={{
            height: 300,
            width: 150,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <Image
            source={{
              uri: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-58548038-84ea-4c6f-807b-e4001734f9c8/court-vision-low-shoes-4G3ZFr.png",
            }}
            resizeMode="center"
            style={{ height: 100 }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              marginLeft: 20,
              borderRadius: 8,
              marginRight: 20,
              backgroundColor: "brown",
              borderColor: "green",
              borderWidth: 2,
            }}
          >
            <Text style={{ color: "white" }}>View Item</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "grey" }}>
              Meet the new Nike Court Vision Low. Its crisp upper and stitched
              overlays are inspired by the hook shot of old-school basketball
              while its super plush, low-cut collar adds a sleek look that's
              comfortable day in and day out.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 300,
            width: 150,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "black",
          }}
        >
          <Image
            source={{
              uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdd52124-ee5b-4ad6-b505-240b184e29e8/air-jordan-7-retro-mens-shoes-7Zr804.png",
            }}
            resizeMode="center"
            style={{ height: 100 }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              marginLeft: 20,
              borderRadius: 8,
              marginRight: 20,
              backgroundColor: "brown",
              borderColor: "green",
              borderWidth: 2,
            }}
          >
            <Text style={{ color: "white" }}>View Item</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "grey" }}>
              Inspired by the shoe originally worn by MJ during the '92 season
              and summer of basketball, the Air Jordan 7 Retro revives its
              championship legacy for a new generation of sneakerheads.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Banner3;
