import { Text, StyleSheet } from "react-native";

type UserNameProps = {
  userName: string;
};

export const UserName = ({ userName }: UserNameProps) => {
  return <Text style={styles.userName}>{userName}</Text>;
};

const styles = StyleSheet.create({
  userName: {
    color: "#1FECFC",
    fontFamily: "poppins-bold",
    fontSize: 16,
    lineHeight: 24,
  },
});
