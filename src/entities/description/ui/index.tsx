import { Text, StyleSheet } from "react-native";

type DescriptionProps = {
  text: string;
};

export const Description = ({ text }: DescriptionProps) => {
  return (
    <Text style={styles.textDescription}> {text.slice(0, 200) + "..."}</Text>
  );
};

const styles = StyleSheet.create({
  textDescription: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "#F3F3F4",
    marginBottom: 25,
  },
});
