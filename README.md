# Productive-Test

## Features

- Login Page
- Home Page
- Profile Page


> Install all Dependencies needed here

` {
  "name": "productive-test",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-navigation/bottom-tabs": "^6.5.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/stack": "^6.3.8",
    "expo": "~47.0.8",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-image-slider-box": "^2.0.7",
    "react-native-swiper": "^1.6.0",
    "react-native-vector-icons": "^9.2.0",
    "react-native-gesture-handler": "~2.8.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9"
  },
  "private": true
} `


> Sign in flow :
1. Login -> home page
2. Navigate between homepage and user profile after login