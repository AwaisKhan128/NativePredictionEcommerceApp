import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import UiText from '../components/UI/Text';
import COLORS from '../constants/COLORS';

const Profile = () => {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 1.2, justifyContent: "center", alignItems: "center" }}>
        <View style={{ height: 180, width: 180, borderRadius: 100, overflow: "hidden" }}>
          <Image resizeMode='contain' source={{ uri: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" }} style={{ flex: 1, height: undefined, width: undefined, borderRadius: 100, overflow: "hidden" }} />
        </View>
        <View style={{marginTop:10}}>
            <UiText style={{fontSize:18,fontFamily:"Nunito-Bold"}}>Awais Khan</UiText>
        </View>
      </View>
      <View style={{ flex: 1.5,paddingHorizontal:15}}>
      <View style={{ backgroundColor:COLORS.primaryColor ,paddingHorizontal:10,paddingVertical:30 ,borderColor:"#ddd",borderWidth:0.5,borderRadius:10,height:300, }}>
          <View style={{paddingVertical:10,justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
            <View>
            <UiText style={{fontFamily:"Nunito-Bold",color:"white"}} >Name</UiText>
          </View>
          <View>
            <UiText style={{fontFamily:"Nunito-SemiBold",color:"white"}}>Awais Khan</UiText>
          </View>
          </View>
        </View>
        <View style={{paddingVertical:10,justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
            <View>
            <UiText style={{fontFamily:"Nunito-Bold",color:"white"}} >Email</UiText>
          </View>
          <View>
            <UiText style={{fontFamily:"Nunito-SemiBold",color:"white"}}>Awaiskhan@gmail.com</UiText>
          </View>
          </View>
        </View>
        <View style={{paddingVertical:10,justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
            <View>
            <UiText style={{fontFamily:"Nunito-Bold",color:"white"}} >User Name</UiText>
          </View>
          <View>
            <UiText style={{fontFamily:"Nunito-SemiBold",color:"white"}}>AwaisKhan99</UiText>
          </View>
          </View>
        </View>
        <View style={{paddingVertical:10,justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
            <View>
            <UiText style={{fontFamily:"Nunito-Bold",color:"white"}} >Contact No</UiText>
          </View>
          <View>
            <UiText style={{fontFamily:"Nunito-SemiBold",color:"white"}}>0900-78601</UiText>
          </View>
          </View>
        </View>
        <View style={{paddingVertical:10,justifyContent:"center"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
            <View>
            <UiText style={{fontFamily:"Nunito-Bold",color:"white"}} >Shipping Address</UiText>
          </View>
          <View>
            <UiText style={{fontFamily:"Nunito-SemiBold",color:"white"}}>DHA Phase 6 Karachi</UiText>
          </View>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Profile;
