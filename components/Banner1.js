import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Banner1 = () => {
  return (
    <SafeAreaView>
      <View style={{ height: 400 }}>
        <ImageBackground
          source={{
            uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc36a688-526a-40a7-b412-40e734a74487/dunk-high-retro-shoe-1PhQRw.png",
          }}
          resizeMode="contain"
          style={{ height: 380 }}
        >
          <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 20, color: "red", fontWeight: "800" }}>
              New Nike Shoes!!!!
            </Text>
            <Text style={{ fontSize: 20, color: "red", fontWeight: "800" }}>
              Check our Stores!!!!
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 150,
                borderRadius: 10,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Shop Now</Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }}></View>
            <TouchableOpacity
              style={{
                height: 35,
                width: 150,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Explore</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: -80,
              marginLeft: 90,
              justifyContent: "space-around",
            }}
          >
            <Image
              source={{
                uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d77c8f9a-c6e8-40a5-8332-910312bc86a5/blazer-mid-77-big-kids-shoes-4VfSTd.png",
              }}
              resizeMode="contain"
              style={{ height: 100 }}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Banner1;
