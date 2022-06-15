import React from "react";
import { View, StatusBar, StyleSheet,Image } from 'react-native';
import Input from "../components/UI/Input";
import Text from "../components/UI/Text";
import Button from "../components/UI/Button"
import { Colors } from "react-native-paper";
import COLORS from "../constants/COLORS";
const Signin = (props) => {
    return (
        <>
            <StatusBar translucent={true} />
            <View style={styles.container}>
                <View style={{flex:0.8,justifyContent:"center",alignItems:"center"}}>
                    <View style={{height:300,width:300}}>
                        <Image source={require("../assets/icons/Giftbox.png")} style={{flex:1,height:undefined,width:undefined}} />
                    </View>
                </View>
                <View style={styles.innerView}>
                    <View>
                        <View style={{ marginVertical: 5, }}>
                            <Text style={{
                                fontFamily: 'Nunito-SemiBold',
                            }}>User Name</Text>
                        </View>
                        <Input value={"AwaisKhan99"} />
                    </View>
                    <View>
                        <View style={{ marginVertical: 5, }}>
                            <Text style={{
                                fontFamily: 'Nunito-SemiBold',
                            }}>Password</Text>
                        </View>
                        <Input secureTextEntry={true} value={"Password"} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button style={{  paddingVertical: 10 }} textStyle={{
                            fontFamily: 'Nunito-Bold',
                            color: "white"
                        }} onPress={() => props.navigation.navigate("BottomTab")} >
                            Login
                        </Button>
                    </View>
                </View>

            </View>
        </>

    )
};

export default Signin;

const styles = StyleSheet.create({
    container:{ flex: 1, backgroundColor: "#fff" },
    buttonView:{ marginTop: 20, backgroundColor: COLORS.primaryColor, borderRadius: 10 },
    innerView:{  flex: 1, paddingHorizontal: 15 }

})