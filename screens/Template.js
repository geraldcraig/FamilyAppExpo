import React from "react";
import {StyleSheet, Text, View} from "react-native";

// function Template() {
//     return (
//         <View style={styles.container}>
//             <Text>Template</Text>
//         </View>
//     );
// }

const Template = () => {
    return (
        <View style={styles.container}>
            <Text>Template</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Template;