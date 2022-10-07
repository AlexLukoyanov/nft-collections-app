import { Image } from "react-native";
type AvatarProps = {
  width?: number;
  height?: number;
  url: string;
  borderRadius?: number;
};

export const Avatar = ({
  width = 40,
  height = 40,
  borderRadius = 50,
  url,
}: AvatarProps) => {
  return (
    <Image
      source={{ uri: url }}
      style={{ width: width, height: height, borderRadius: borderRadius }}
    />
  );
};
