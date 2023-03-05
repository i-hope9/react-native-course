import { StyleSheet, Text, View, Platform } from "react-native"
import Colors from "../../constants/Colors"


export default function Title({children}) {
    return <View style={styles.container}><Text style={styles.title}>{children}</Text></View>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'DOSGothic',
        fontSize: 24,
        fontWeight: '900',
        padding: 16,
        // color: Platform.OS === "ios" ? Colors.primary500 : Colors.primary800,
        // color: Platform.select({ios: Colors.primary500, android: Colors.primary800}),
        color: Colors.primary500,
        textAlign: 'center',
        maxWidth: '80%',
        width: 300
    }
})