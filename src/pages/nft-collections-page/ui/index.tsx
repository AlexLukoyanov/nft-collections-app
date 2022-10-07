import { useAppDispatch, useAppSelector } from "@src/shared/hooks";
import { fetchCollections } from "@src/store/nft-collections-slice";
import { NFTCollection } from "@src/widgets/nft-collection";
import React, { useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";

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
