import { Text, Image, View } from "react-native";
import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <View className="w-screen bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5 border-2">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-screen h-72"
          style={{ resizeMode: "contain" }}
        ></Image>
      </View>
      <View className="mt-5">
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
