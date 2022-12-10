import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const Carousel2 = () => {
  const images = [
    {
      id: 1,
      url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6b3c5828-aebb-4d46-8d84-73f994f97c1a/air-jordan-7-retro-mens-shoes-7Zr804.png",
    },
    {
      id: 2,
      url: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/44129798-31cb-4fad-b95e-a602267ce1f9/air-jordan-14-retro-shoes-nQjT3b.png",
    },
    {
      id: 3,

      url: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/bbe56b5c-07ed-4ce3-a5b5-e6d5c8f68a9b/air-jordan-12-retro-mens-shoes-kcMcpK.png",
    },
  ];

  return (
    <View>
      <Swiper style={{ height: 200 }} loop autoplay={true}>
        {images.map((image, index) => (
          <Image
            source={{ uri: image.url }}
            key={index}
            resizeMode="cover"
            style={{ height: "100%" }}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel2;
