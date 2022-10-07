import { INFTCollection } from "../../../shared/api/nft-collections-api";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { Slider } from "../../../entities/slider";
import { ButtonUi } from "../../../shared/ui/button";
import { Description } from "../../../entities/description/ui";
import { Avatar } from "../../../entities/avatar/ui";
import { UserName } from "../../../entities/user-name/ui";
import { PriceEth } from "../../../entities/price-eth";
import { PriceUsd } from "../../../entities/price-usd";

type NFTItemProps = {
  item: INFTCollection;
};

export const NFTCollection = ({ item }: NFTItemProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const openUrl = async (url: string) => {
    return await Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
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
                item.items[activeSlide] ? item.items[activeSlide].price_eth : 0
              }
            />
            <PriceUsd
              price={
                item.items[activeSlide] ? item.items[activeSlide].price_usd : 0
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    marginBottom: 20,
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
});
