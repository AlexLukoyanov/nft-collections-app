import { Item } from "@src/shared/api/nft-collections-api";
import { ButtonUi } from "@src/shared/ui/button";
import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

type SliderProps = {
  items: Item[];
  activeSlide: number;
  setActiveSlide: (number: number) => void;
  collectionUrl?: string;
};

export const Slider = ({
  items,
  activeSlide,
  collectionUrl,
  setActiveSlide,
}: SliderProps) => {
  const onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent) {
      const slide = Math.ceil(
        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
      );
      if (slide !== activeSlide) {
        setActiveSlide(slide);
      }
    }
  };

  const openUrl = async (url: string) => {
    if (url === "") {
      return null;
    } else {
      return await Linking.openURL(url);
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
        {items.slice(0, 4).map((el) => (
          <View key={el.name} style={styles.imageContainer}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => openUrl(el.item_url)}
            >
              <Image style={styles.imageContainer} source={{ uri: el.image }} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.collageContainer}>
          <View style={styles.collage}>
            {items.map((el, i) => (
              <Image
                style={styles.collageItem}
                source={{ uri: el.image }}
                key={i}
              />
            ))}
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.text}>
              Browse all NFTs from this collection
            </Text>
            <ButtonUi
              onPress={() => openUrl(collectionUrl ? collectionUrl : "")}
            >
              Browse collection
            </ButtonUi>
          </View>
        </View>
      </ScrollView>
      <View style={styles.pagination}>
        {Array(items.length + 1)
          .fill(1)
          .map((_, i) => (
            <View
              key={i}
              style={activeSlide === i ? styles.dotActive : styles.dot}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  collageContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  collage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  collageItem: {
    color: "white",
    width: Dimensions.get("window").width / 2,
    height: "50%",
  },
  wrapper: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 390,
    backgroundColor: "rgba(5, 7, 27, 0.75)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "poppins-bold",
    fontSize: 39,
    color: "#FFFFFF",
    textAlign: "center",
  },
  pagination: {
    width: 80,
    position: "absolute",
    bottom: "3%",
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
