import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ChatScreen = ({ navigation }) => {

    return <View style={styles.container}>
        <Text>Chat list screen</Text>
        <Button title='Go to login screen' onPress={() => navigation.navigate("Login", {
            itemId: 86,
            otherParam: 'anything you want here',
        })
        }
        />
        <Button title='Go to signup screen' onPress={() => navigation.navigate("Signup")}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ChatScreen;