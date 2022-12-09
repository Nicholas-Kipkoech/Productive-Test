import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const Carousel3 = () => {
  const images = [
    {
      id: 1,
      desc: "The radiance lives on in the Nike Air Force 1 ’07 Craft, the b-ball icon that puts a fresh spin on what you know best: crisp leather, clean lines and the perfect amount of flash to make you shine. This iteration has pops of bubblegum pink on the insole, woven label on the tongue.",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/879db1d0-b43a-4ee1-89b0-814d66e83638/go-flyease-easy-on-off-shoes-6nd2cc.png",
    },
    {
      id: 2,
      desc: "The Nike Air Force 1 '07 LV8 1 incorporates the same hoops-inspired performance features of the '82 OG while adding fresh design details for an updated look. Its low-cut collar provides a comfortable fit around the ankle, while the all-red colorway delivers a striking visual that tells others to stop and look.",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e530a3-2317-4783-819b-40860281daaf/streakfly-road-racing-shoes-V17qZm.png",
    },
    {
      id: 3,
      desc: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c20bb9e-48d2-44e4-bb2a-abe502b11b50/air-max-270-shoes-s1JpCx.png",
    },
  ];

  return (
    <View>
      <Swiper style={{ height: 200 }} loop autoplay={true}>
        {images.map((image, index) => (
          <ImageBackground
            source={{ uri: image.url }}
            resizeMode="cover"
            style={{ height: 200 }}
          >
            <Text key={index} style={{ margin: 20, fontWeight: "600" }}>
              {image.desc}
            </Text>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel3;
