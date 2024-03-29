import {useContext, useEffect, useState} from "react";
import { Button, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";
import {auth, db} from '../firebaseConfig';
import userImage from '../assets/images/userImage.jpeg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userData } from "./SignInScreen";
import { useTheme } from "../hooks/useTheme";
import { useAuthContext } from "../hooks/useAuthContext";
import {onValue, ref} from "firebase/database";



// const userEmail = async () => {
//     try {
//         const value = await AsyncStorage.getItem('email');
//         if (value !== null) {
//             console.log('email:', value);
//             return value;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

const SettingsScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const { dispatch } = useAuthContext();

    const { user } = useAuthContext();
    // console.log('user:', user);
    // const { uid } = user;
    // console.log('uid:', uid);

    useEffect(() => {
        getUserData();
    }, []);

    function getUserData() {

        try {
            const { uid } = user;
            const userData = ref(db, `users/${uid}`);
            onValue(userData, (snapshot) => {
                const data = snapshot.val();
                console.log('data:', data);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setAbout(data.about);
            });
        } catch (error) {
            console.error(error);
        }
    }


    // const { color, changeColor, first, last, mail } = useTheme();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                console.log('user signed out')
                navigation.replace('Sign In');
            }).catch((error) => {
            const errorMessage = error.message;
            console.log('Sign out error:', errorMessage)
            console.log('error:', error.message);
        });
    };

    // const handlePress = () => { 
    //     changeColor('blue');
    // }

    // userEmail().then(r => setEmail(r);



    return (
        <View style={styles.container}>
            <View>
                {/* <TouchableOpacity onPress={handlePress}>
                <Image
                    style={[styles.image, { borderColor: color }]}
                    source={userImage}
                />
                </TouchableOpacity> */}
                <Image
                    style={styles.image}
                    source={userImage}
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={newText => setFirstName(newText)}
                defaultValue={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={newText => setLastName(newText)}
                defaultValue={lastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={newText => setEmail(newText)}
                defaultValue={email}
            />
            <TextInput
                style={styles.input}
                placeholder="About"
                autoCapitalize="none"
                onChangeText={newText => setAbout(newText)}
                defaultValue={about}
            />
            <Button title="Save" onPress={() => {
                console.log("firstname : ", firstName);
                console.log("lastname : ", lastName);
                console.log("email: ", email);
                console.log("about: ", about)
            }} />
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    image: {
        borderRadius: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 80,
        width: 80,
        marginBottom: 12
    }
});

export default SettingsScreen;