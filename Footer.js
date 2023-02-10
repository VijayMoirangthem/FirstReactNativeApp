import { StyleSheet, View, Button, Text, FlatList } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>Made By: Vijay Moirangthem (2023)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 0,
    height: 30,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default Footer;
