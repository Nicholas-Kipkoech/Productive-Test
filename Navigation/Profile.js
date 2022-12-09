import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>

      <Image
        style={{
          height: 130,
          width: 130,
          borderRadius: 65,
          margin: 20,
          borderColor: "black",
          borderWidth: 0.7,
        }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
        }}
        resizeMode="contain"
      />

      <View>
        <Text style={{ fontSize: 20, color: "gray" }}>Account Settings</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="people" size={30} />
          <Text style={{ marginRight: 100, fontWeight: "600", fontSize: 20 }}>
            Profile Details{" "}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="layers" size={30} />
          <Text style={{ marginRight: 100, fontWeight: "600", fontSize: 20 }}>
            Account Info{" "}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
        <Text style={{ fontSize: 20, color: "gray", padding: 20 }}>
          Contact Details
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="mail" size={30} />
          <Text style={{ marginRight: 80, fontWeight: "600", fontSize: 20 }}>
            Email Address{" "}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="call" size={30} />
          <Text style={{ marginRight: 80, fontWeight: "600", fontSize: 20 }}>
            Phone Number{" "}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Ionicons name="location" size={30} />
          <Text style={{ marginRight: 80, fontWeight: "600", fontSize: 20 }}>
            Address{" "}
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
