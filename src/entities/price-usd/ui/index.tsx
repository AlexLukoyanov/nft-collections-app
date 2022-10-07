import { Text, StyleSheet } from "react-native";

type PriceUsdProps = {
  price: number;
};

export const PriceUsd = ({ price }: PriceUsdProps) => {
  return <Text style={styles.priceUsd}>($ {price})</Text>;
};

const styles = StyleSheet.create({
  priceUsd: {
    fontSize: 10,
    color: "#CDCDD1",
    marginLeft: 5,
  },
});
