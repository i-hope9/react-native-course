import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onPicked }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "🤔 번호를 알맞게 입력해주세요",
        "1 ~ 99 사이의 숫자만 입력할 수 있습니다.",
        [{ text: "OK!", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPicked(chosenNumber);
  };

  const marginTopDistance = height < 400 ? 20 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number!</Title>
          <Card>
            <InstructionText>🤖 숫자를 입력해주세요</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 20 : 100,
    alignContent: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontWeight: "900",
    fontSize: 32,
    borderBottomColor: Colors.primary300,
    borderBottomWidth: 2,
    color: Colors.secondary400,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
