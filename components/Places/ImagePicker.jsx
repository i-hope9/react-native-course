import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker({ onTakeImage }) {
  const [status, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  async function verifyPermissions() {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (status.granted === PermissionStatus.DENIED) {
      Alert.alert("카메라 접근 권한이 없습니다.");
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const permission = await verifyPermissions();
    if (!permission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
  }

  let imagePreview = <Text>추가된 사진이 없습니다.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        사진 촬영
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
