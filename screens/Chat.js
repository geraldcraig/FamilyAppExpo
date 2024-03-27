import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { child, getDatabase, ref, get, push, set, update } from "firebase/database";
import { useAuthContext} from "../hooks/useAuthContext";
import { auth, db } from '../firebaseConfig';

// Get current user's uid
const uid = auth.currentUser.uid;

// Get a reference to the database service
const database = getDatabase();

// Create a new chat id
const newChatRef = push(ref(database, 'chats'));

// Write the new chat's data
set(newChatRef, {
    uid: uid,
    // other chat data...
});

// Get a reference to the chat you want to update
const updateChatRef = ref(db, 'chats/' + chatId);

// Update the chat data
update(updateChatRef, {
  // fields you want to update...
});

// Get a reference to the chat you want to delete
const deleteChatRef = ref(db, 'chats/' + chatId);

// Delete the chat
remove(deleteChatRef);

const Chat = () => {

    const [message, setMessage] = useState('');
    const { user } = useAuthContext();
    const uid = user.uid;

    const handleSignUp = () => {
        const db = getDatabase();
        const usersRef = ref(db, 'users');
        const userRef = child(usersRef, uid);

        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const userDetails = snapshot.val();
                console.log(userDetails);
                const { firstName, lastName } = userDetails;
                console.log(`User: ${firstName} ${lastName}`);
                console.log(userDetails.email)
                console.log(userDetails.status)
            } else {
                console.log("User not found");
            }
        }).catch((error) => {
            console.error(error);
        });
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

export default Chat;