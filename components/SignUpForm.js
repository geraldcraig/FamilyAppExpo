import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import {TextInput, TouchableOpacity, View} from "react-native";
import colors from '../constants/colors';

const Input = props => {
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>

        <View style={styles.inputContainer}>
            {
                props.icon && <props.iconPack
                    name={props.icon}
                    size={props.iconSize || 15 }
                    style={styles.icon} />
            }
            <TextInput
                style={styles.input}/>
        </View>
        {
            props.errorText &&
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.errorText}</Text>
            </View>
        }
    </View>
};

const SubmitButton = props => {

    const enabledBgColor = props.color || "#32d48e";
    const disabledBgColor = "#bdc3c7";
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

    return <TouchableOpacity
        onPress={props.disabled ? () => {} : props.onPress}
        style={{
            ...styles.button,
            ...props.style,
            ...{ backgroundColor: bgColor }}}>
        <Text style={{ color: props.disabled ? colors.grey : 'white' }}>
            { props.title }
        </Text>
    </TouchableOpacity>
};

const SignUpForm = props => {
    return (
        <>
            <Input
                label="First name"
                icon="user-o"
                iconPack={FontAwesome} />

            <Input
                label="Last name"
                icon="user-o"
                iconPack={FontAwesome} />

            <Input
                label="Email"
                icon="mail"
                iconPack={Feather} />

            <Input
                label="Password"
                icon="lock"
                iconPack={Feather} />

            <SubmitButton
                title="Sign up"
                onPress={() => console.log("Button pressed")}
                style={{ marginTop: 20 }}/>
        </>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%'
    },
    label: {
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: "#1c1e21"
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: "#F4F8F7",
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        color: "#7f8c8d"
    },
    input: {
        color: "#1c1e21",
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3
    }
});

export default SignUpForm;