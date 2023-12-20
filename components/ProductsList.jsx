import { FlatList, View, Text } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <ProductCard
          image={item.image.url}
          description={item.description}
          title={item.programName}
        />
      )}
    />
  );
};

export default ProductsList;
