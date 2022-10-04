import { INFTCollection } from "../../../shared/api/nft-collections-api";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Slider } from "../../../shared/ui/slider";

type NFTItemProps = {
  item: INFTCollection;
};

export const NFTCollection = ({ item }: NFTItemProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.avatar} source={{ uri: item.creator_pic }} />
        <View>
          <Text style={styles.userName}>{item.creator_name}</Text>
          <View style={styles.priceContainer}>
            <Image
              source={require("../../../../assets/img/rhombus.png")}
              style={{ width: 8, height: 12 }}
            />
            <Text style={styles.priceEth}>
              {item.items[activeSlide] ? item.items[activeSlide].price_eth : 0}
            </Text>
            <Text style={styles.priceUsd}>
              ($
              {item.items[activeSlide] ? item.items[activeSlide].price_usd : 0})
            </Text>
          </View>
        </View>
      </View>
      <Slider
        items={item.items}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        collectionUrl={item.collection_url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    color: "#1FECFC",
    fontFamily: "poppins-bold",
    fontSize: 16,
    lineHeight: 24,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceEth: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 5,
  },
  priceUsd: {
    fontSize: 10,
    color: "#CDCDD1",
    marginLeft: 5,
  },
});
