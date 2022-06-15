import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';
import { AntDesign } from '@expo/vector-icons';

const Reviews = ({ data }) => {
  const { isPositive, name, review, image, rating } = data;

  return (
    <View style={Styles.container}>
      <View style={{ marginRight: 10 }}>
        <View style={{ height: 50, width: 50, borderRadius: 100, overflow: "hidden" }}>
          <Image style={{ flex: 1, height: undefined, width: undefined, borderRadius: 100, overflow: "hidden" }} resizeMode="contain" source={{ uri: image }} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <View>
            <UiText style={{ fontFamily: "Nunito-Bold" }}>
              {name}
            </UiText>
          </View>
          <View>
            <UiText>
              {review}
            </UiText>
          </View>
        </View>
      </View>
      <View style={{ marginLeft:10, alignSelf:"center", paddingHorizontal: 10, height: 50, width: 100, backgroundColor: isPositive ? "rgba(50,205,50,0.8)" : "rgba(255,0,0,0.8)", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
        <UiText style={{ color: "white", textAlign: "center" }}>
          {`${isPositive ? "Positive" : "Negative"}`}
        </UiText>
        <UiText style={{ color: "white", textAlign: "center" }}>
          {`${rating} %`}
        </UiText>
      </View>

    </View>
  );
};

//     <View style={Styles.description}>
//     <UiText style={Styles.head}>Description</UiText>
//     <UiText style={Styles.descriptionText}>{data.description}</UiText>
//   </View>
const Styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#eee", marginBottom: 5, paddingBottom: 5 },
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
