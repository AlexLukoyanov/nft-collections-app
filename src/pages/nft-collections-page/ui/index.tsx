import { useAppDispatch, useAppSelector } from "@src/shared/hooks";
import { fetchCollections } from "@src/store/nft-collections-slice";
import { NFTCollection } from "@src/widgets/nft-collection";
import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

export const NFTCollectionsPage = () => {
  const dispatch = useAppDispatch();
  const { collections } = useAppSelector((state) => state.nftCollectionsSlice);
  const translateY = useSharedValue(0);

  useEffect(() => {
    dispatch(fetchCollections({ page: 1, limit: 10 }));
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <View>
      <Animated.FlatList
        onScroll={scrollHandler}
        data={collections}
        renderItem={({ item, index }) => (
          <NFTCollection item={item} translateY={translateY} index={index} />
        )}
        keyExtractor={(item) => item.id}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};
