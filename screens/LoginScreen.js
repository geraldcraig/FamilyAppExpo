import React from 'react';
import {Feather} from '@expo/vector-icons';
import {Button, StyleSheet, Text, View} from "react-native";

function LoginScreen({route, navigation}) {

    const {itemId, otherParam} = route.params;

    return (
        <>
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button title='Go to login screen... again' onPress={() => navigation.navigate("Login", {
                    itemId: Math.floor(Math.random() * 100),
                })
                }
                />
                <Button title='Go to signup screen' onPress={() => navigation.navigate("Signup")}/>
                <Button title='Go to chat screen' onPress={() => navigation.navigate("Chat Screen")}/>
                {/*<Input*/}
                {/*    label="Email"*/}
                {/*    icon="mail"*/}
                {/*    iconPack={Feather} />*/}

                {/*<Input*/}
                {/*    label="Password"*/}
                {/*    icon="lock"*/}
                {/*    iconPack={Feather} />*/}

                {/*<SubmitButton*/}
                {/*    title="Sign in"*/}
                {/*    onPress={() => console.log("Button pressed")}*/}
                {/*    style={{ marginTop: 20 }}/>*/}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen;