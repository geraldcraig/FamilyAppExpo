import {StatusBar} from "expo-status-bar";
import {Pressable, StyleSheet, Text, View} from "react-native";

function Button({label}) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('you pressed a button')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

function ButtonExample() {
    return (
        <View style={styles.container}>
            <View style={styles.footerContainer}>
                <Button label="Submit"/>
                <Button label="Press"/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default ButtonExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#25292e',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        // color: '#fff',
        fontSize: 16
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center'
    }
});