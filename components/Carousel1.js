import React from "react";
import { Image, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const Carousel1 = () => {
  const images = [
    {
      id: 1,
      url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png",
    },
    {
      id: 2,
      url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e66bb813-de06-48b3-a348-d03cae92d48d/dunk-high-retro-mens-shoe-dTVTCk.png",
    },
    {
      id: 3,

      url:
        "https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/b3cb2095-b729-404b-8cdc-3383771d0036/image.jpg",
    },
    {
      id: 4,
      url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa5164d2-7cb2-488e-85bd-1d1d677dbf9e/air-max-97-premium-mens-shoes-ztThsC.png",
    },
    {
      id: 5,
      url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40725d55-83ab-4569-ac36-959a298756f9/air-max-270-mens-shoes-KkLcGR.png",
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

export default Carousel1;
