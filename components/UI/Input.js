import React from "react";
import { TextInput, View ,StyleSheet} from "react-native";

const Input = (props) => {
    return <TextInput  style={{ ...Styles.text, ...props.styles }} {...props} />
};

export default Input;

const Styles = StyleSheet.create({
    text: {
        fontFamily: 'Nunito',
        borderColor:"#bbb",
        paddingVertical:10,
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:10,
    },
});
