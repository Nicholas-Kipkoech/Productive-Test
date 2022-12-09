import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const Carousel2 = () => {
  const images = [
    {
      id: 1,
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/879db1d0-b43a-4ee1-89b0-814d66e83638/go-flyease-easy-on-off-shoes-6nd2cc.png",
    },
    {
      id: 2,
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e530a3-2317-4783-819b-40860281daaf/streakfly-road-racing-shoes-V17qZm.png",
    },
    {
      id: 3,

      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c20bb9e-48d2-44e4-bb2a-abe502b11b50/air-max-270-shoes-s1JpCx.png",
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
