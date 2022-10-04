import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
type ButtonUiProps = {
  children: React.ReactNode;
  onPress?: () => void;
  width?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

export const ButtonUi = ({
  children,
  width,
  onPress,
  fontSize = 14,
  color = "#FFFFFF",
  fontFamily = "poppins-regular",
  paddingHorizontal = 16,
  paddingVertical = 12,
}: ButtonUiProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.button,
          width: width,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
        }}
      >
        <Text
          style={{ fontSize: fontSize, color: color, fontFamily: fontFamily }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: "#1FECFC",
    borderRadius: 8,
    borderStyle: "solid",
  },
});
