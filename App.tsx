import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { useFonts } from "expo-font";
import { NFTCollectionsPage } from "@src/pages/nft-collections-page";

export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#05071B" />
        <NFTCollectionsPage />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05071B",
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 20,
  },
});
