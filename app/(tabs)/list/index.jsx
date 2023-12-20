import {
  SafeAreaView,
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { query } from "../../../lib/query";
import ProductsList from "../../../components/ProductsList";
import { client } from "../../../lib/apolloClient";
import { useQuery } from "@apollo/client";

const list = () => {
  const { data, loading, error } = useQuery(query);
  const programs = data?.workoutProgramCollection.items;
  const [resData, setResData] = useState({});
  const [errData, setErrData] = useState({});
  const [fetch, setFetch] = useState(false);
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View className="items-center justify-center h-2/3">
          <Text className="text-3xl">list</Text>
          <Button
            onPress={() => {
              setFetch(!fetch);
            }}
            title="click"
          ></Button>
          <ScrollView
            contentContainerStyle={{}}
            className="items-center h-screen"
          >
            {loading == false && <ProductsList products={programs} />}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default list;
