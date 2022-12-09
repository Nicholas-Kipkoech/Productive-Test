import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Banner1 from "../components/Banner1";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";
import Carousel3 from "../components/Carousel3";

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          height: 40,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "900", color: "blue" }}>
          Productive-Test Interview (SWE)
        </Text>
      </View>
      <ScrollView>
        <Banner1 />
        <Carousel1 />
        <Carousel2 />
        <Carousel3 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
