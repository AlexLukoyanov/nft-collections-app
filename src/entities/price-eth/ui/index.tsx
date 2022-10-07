import { Text, StyleSheet } from "react-native";

type PriceEthProps = {
  price: number;
};

export const PriceEth = ({ price }: PriceEthProps) => {
  return <Text style={styles.priceEth}>{price}</Text>;
};

const styles = StyleSheet.create({
  priceEth: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 5,
  },
});
