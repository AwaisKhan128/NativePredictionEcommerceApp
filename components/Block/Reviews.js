import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';

const Reviews = (data) => {
  const { title, description, image } = data;
  console.log("Data included",data)

  return (
        <View style={Styles.container}>
          <View>
            <ImageBackground
              source={{
                uri: `${image}`,
              }}
              resizeMode="center"
              style={Styles.productImage}
            />
          </View>
          <View>
            <UiText style={Styles.head}>{title}</UiText>
            <UiText style={Styles.descriptionText}>{description}</UiText>
          </View>
        </View>
  );
};

//     <View style={Styles.description}>
//     <UiText style={Styles.head}>Description</UiText>
//     <UiText style={Styles.descriptionText}>{data.description}</UiText>
//   </View>
const Styles = StyleSheet.create({
  container: {},
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },

  tag: {
    marginTop: 0,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.textColorLight,
  },

  price: {
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
    transform: [{ translateY: 15 }, { translateX: -3 }],
  },
  size: {
    marginTop: 20,
  },
  sizes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizeBar: {
    marginTop: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.textColorLight,
    borderRadius: 10,
  },
  sizeBarText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
  },
  description: {
    marginVertical: 20,
  },
  head: {
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
    color: COLORS.black,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.textColorLight,
    letterSpacing: 0.2,
  },
  productImage: {
    height: '50%',
    width: '50%',
    transform: [{ translateY: 30 }],
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Reviews;
