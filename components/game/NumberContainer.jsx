import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function NumberContainer({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'slategrey',
    padding: deviceWidth < 380 ? 12 : 24,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    marginVertical: deviceWidth < 380 ? 8 : 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: 'DOSGothic',
    color: 'whitesmoke',
    fontSize: deviceWidth < 380 ? 28: 36,
    fontWeight: "900",
  },
});
