import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  Text,
} from "react-native";
import React, { useState } from "react";
import { INFTCollection } from "@src/shared/api/nft-collections-api";
import { Avatar } from "@src/entities/avatar";
import { UserName } from "@src/entities/user-name";
import { PriceEth } from "@src/entities/price-eth";
import { PriceUsd } from "@src/entities/price-usd";
import { Slider } from "@src/entities/slider";
import { Description } from "@src/entities/description";
import { ButtonUi } from "@src/shared/ui/button";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

type NFTItemProps = {
  item: INFTCollection;
  translateY: Animated.SharedValue<number>;
  index: number;
};

export const NFTCollection = ({ item, translateY, index }: NFTItemProps) => {
  const { height, width } = Dimensions.get("window");
  const inputRange = [
    (-index - 1) * height,
    index * height,
    (index + 1) * height,
  ];

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const rContainerStyle = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, inputRange, [
      0,
      0,
      -height / 2,
    ]);
    return {
      transform: [{ translateY: scale }],
    };
  });

  const rGradientStyle = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, inputRange, [
      0,
      0,
      -height / 2,
    ]);

    const opacity = interpolate(translateY.value, inputRange, [0, 0, 1]);
    return {
      transform: [{ translateY: scale }],
      opacity: opacity,
    };
  });

  const openUrl = async (url: string) => {
    return await Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={rContainerStyle}>
        <View style={styles.wrapper}>
          <Avatar url={item.creator_pic} />
          <View style={styles.userInfo}>
            <UserName userName={item.creator_name} />
            <View style={styles.priceContainer}>
              <Image
                source={require("../../../../assets/img/rhombus.png")}
                style={{ width: 8, height: 12 }}
              />

              <PriceEth
                price={
                  item.items[activeSlide]
                    ? item.items[activeSlide].price_eth
                    : 0
                }
              />
              <PriceUsd
                price={
                  item.items[activeSlide]
                    ? item.items[activeSlide].price_usd
                    : 0
                }
              />
            </View>
          </View>
        </View>
        <Slider
          items={item.items}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          collectionUrl={item.collection_url}
        />
        <View style={styles.containerDesc}>
          <Description text={item.description} />
          <ButtonUi onPress={() => openUrl(item.collection_url)} width="100%">
            Browse collection
          </ButtonUi>
        </View>
      </Animated.View>

      <Animated.View style={[styles.box, rGradientStyle]}>
        <LinearGradient
          style={{ width: width, height: height / 2 }}
          colors={["#1FECFC", "#1fedfcc4", "#1fedfc29", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.5 }}
        >
          <Text style={styles.text}>Scroll for next gem</Text>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#05071B",
    paddingBottom: 100,
  },
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  userInfo: {
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerDesc: {
    paddingHorizontal: 8,
    paddingTop: 5,
  },
  box: {
    width: Dimensions.get("window").width,
    height: 500,
    marginTop: 10,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "poppins-bold",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 18,
  },
});
