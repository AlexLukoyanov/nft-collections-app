import React, { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Item } from "../../../api/nft-collections-api/models";

type SliderProps = {
  items: Item[];
};

export const Slider = ({ items }: SliderProps) => {
  const [isActive, setIsActive] = useState(0);
  const onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent) {
      const slide = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
      );
      if (slide !== isActive) {
        setIsActive(slide);
      }
    }
  };
  return (
    <View style={styles.slider}>
      <ScrollView
        onScroll={(e) => onScrollHandler(e)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        scrollEventThrottle={17}
      >
        <View style={styles.image}>
          <Text style={{ color: "white" }}> First slide</Text>
        </View>
        {items.map((el) => (
          <View key={el.name} style={styles.image}>
            <Image style={styles.image} source={{ uri: el.image }} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {Array(items.length + 1)
          .fill(1)
          .map((_, i) => (
            <View
              key={i}
              style={isActive === i ? styles.dotActive : styles.dot}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 390,
  },
  pagination: {
    width: 80,
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    borderColor: "#F3F3F4",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "solid",
  },
  dotActive: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: "#F3F3F4",
  },
});
