import { View, StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/Colors"

export default function Card ({children}) {
    return <View style={styles.card}>{children}</View>
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    card: {
        marginTop: deviceWidth < 360 ? 16 : 24,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary400,
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        alignItems: "center",
      },
})