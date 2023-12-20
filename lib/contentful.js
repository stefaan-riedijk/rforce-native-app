import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

export default function contentful() {
  const sanitizeData = ({ rawData }) => {
    const dataItems = rawData.data.items;
    dataItems.map((item) => {
      const img = item.fields.image;
    });
  };
  const getPrograms = async (parseResData, parseErrData) => {
    const space_id = process.env.EXPO_PUBLIC_CONTENTFUL_SPACE_ID;
    const access_token = process.env.EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const content_type = "workoutProgram";
    const limit = 2;
    const include = 5;
    await axios
      .get(
        `https://cdn.contentful.com/spaces/${space_id}/entries?access_token=${access_token}&content_type=${content_type}&include=${include}&limit=${limit}`
      )
      .then((res) => {
        parseResData(res);
      })
      .catch((err) => {
        parseErrData(err);
      });
  };

  return { getPrograms };
}
