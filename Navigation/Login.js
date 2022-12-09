import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "Password" && username === "Admin") {
      Alert.alert("Login successfull");
      navigation.navigate("Homepage");
    }
  };

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: 28 }}>
        <Text style={{ fontSize: 30, fontWeight: "800", color: "blue" }}>
          Login
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Username</Text>
        <TextInput
          value={username}
          placeholder="Enter your username"
          onChangeText={(text) => setUsername(text)}
          style={{
            height: 40,
            width: 250,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <View style={{ margin: 10 }}></View>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          style={{
            height: 40,
            width: 250,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              backgroundColor: "#27BBDC",
              borderRadius: 8,
              width: 240,
            }}
            onPress={handleLogin}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
