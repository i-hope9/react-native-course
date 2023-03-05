import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  let content = (
    <>
      <View style={[styles.imageContainer, { margin: 36 }]}>
        <Image
          style={[
            styles.image,
            {
              width: imageSize,
              height: imageSize,
              borderRadius: imageSize / 2,
            },
          ]}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        🤖 <Text style={styles.highlightText}>{roundsNumber}</Text>번의 시도
        끝에 <Text style={styles.highlightText}>{userNumber}</Text>를 맞췄음!
      </Text>
      <PrimaryButton onPress={onStartNewGame}>한 판 더!</PrimaryButton>
    </>
  );

  if (width > 500) {
    imageSize = 250;
    content = (
      <View style={styles.contentWide}>
        <View style={[styles.imageContainer, { margin: 16 }]}>
          <Image
            style={[
              styles.image,
              {
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2,
              },
            ]}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            🤖 <Text style={styles.highlightText}>{roundsNumber}</Text>번의 시도
            끝에 <Text style={styles.highlightText}>{userNumber}</Text>를
            맞췄음!
          </Text>
          <PrimaryButton onPress={onStartNewGame}>한 판 더!</PrimaryButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      {content}
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "DOSGothic",
    color: "slategrey",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "DOSGothic",
    color: Colors.primary800,
  },
  contentWide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
