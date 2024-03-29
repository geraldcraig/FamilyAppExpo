import { useCallback, useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {child, getDatabase, ref, set} from "firebase/database";
import { useAuthContext} from "../hooks/useAuthContext";

const ChatScreen = () => {

    // const [messageText, setMessageText] = useState("");
    //
    // const sendMessage = useCallback(() => {
    //     setMessageText("");
    // }, [messageText]);

    const [message, setMessage] = useState('');
    const { user } = useAuthContext();

    const handleSignUp = async () => {
        try {
            // const result = await createUserWithEmailAndPassword(auth, email, password);
            const { uid } = user;   

            const getUserData = async () => {
                const dbRef = ref(getDatabase());
                const userRef = child(dbRef, `users/${uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    console.log('User data:', userData);
                    return userData;
                } else {
                    console.log('User not found');
                    return null;
                }
            };

            const userData = await getUserData();

        

            // const userData = await createMessage(message);

            console.log('Message sent successfully:');
            console.log("UserData: ", userData);
            // navigation.replace('Home');
        } catch (error) {
            const errorMessage = error.message;
            console.log('Sign up error:', errorMessage)
        }
    }

    const createMessage = async (message) => {
        const userData = {
            uid: user.uid,
            email: user.email,
            lastMessage: message,
            timestamp: new Date().toISOString(),
        };
        const dbRef = ref(getDatabase());
        const childRef = child(dbRef, `chats/${message}`);
        await set(childRef, userData);
        return userData;
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                // source={image}
                style={styles.backgroundImage}
            ></ImageBackground>

            <Text>Chat Screen</Text>

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Plus icon")}>
                    <Ionicons name="add-outline" size={24} color="black" />
                </TouchableOpacity>

                <TextInput
                    style={styles.textBox}
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                    // onSubmitEditing={sendMessage}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}>
                    {/*onPress={(sendMessage) => console.log("Send icon: " + messageText)}>*/}
                    <Ionicons name="send-outline" size={24} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50
    },
    textBox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 15,
        paddingHorizontal: 12
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35
    }
});

export default ChatScreen;