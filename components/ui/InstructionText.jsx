import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'DOSGothic',
    color: Colors.secondary400,
    fontSize: 18
  },
})