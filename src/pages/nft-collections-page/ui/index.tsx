import React, { useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { fetchCollections } from "../../../store/nft-collections-slice";
import { NFTCollection } from "../../../entities/nft-collection/ui/index";

export const NFTCollectionsPage = () => {
  const dispatch = useAppDispatch();
  const { collections } = useAppSelector((state) => state.nftCollectionsSlice);

  useEffect(() => {
    dispatch(fetchCollections({ page: 1, limit: 10 }));
  }, []);

  return (
    <View>
      <FlatList
        data={collections}
        renderItem={({ item }) => <NFTCollection item={item} />}
        keyExtractor={(item) => item.id}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};
