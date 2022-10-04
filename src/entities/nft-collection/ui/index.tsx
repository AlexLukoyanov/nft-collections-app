import { INFTCollection } from "../../../shared/api/nft-collections-api";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useState } from "react";
import { Slider } from "../../../shared/ui/slider";

type NFTItemProps = {
  item: INFTCollection;
};

export const NFTCollection = ({ item }: NFTItemProps) => {
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
            <Text style={styles.priceEth}>8.2</Text>
            <Text style={styles.priceUsd}>($79.078)</Text>
          </View>
        </View>
      </View>
      <Slider items={item.items} />
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
