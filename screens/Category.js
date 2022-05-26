import React from 'react';
import { StyleSheet } from 'react-native';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import { View } from 'react-native';
import CategoriesBlock from '../components/Block/Categories';
import HorizontalProductView from '../components/Block/HorizontalProductView';
import COLORS from '../constants/COLORS';
import { useSelector } from 'react-redux';
import OfferBlock from '../components/Block/Offer';
import UiAlert from '../components/UI/Alert';

const Category = ({ route, navigation }) => {
  const popularProducts = useSelector((state) => {
    return state.product.popularProducts;
  });

  const all_products = useSelector((state)=>{
    return state.product.products;
  })


  console.log(navigation);
  return (
    <View style={styles.view}>
      <UiView style={styles.screen}>
        {/* <CategoriesBlock navigation={navigation} /> */}
        <HorizontalProductView
          data={all_products}
          navigation={navigation}
          headTitle={navigation.state.params.categoryName.name}
        />
        <OfferBlock />
        <View style={styles.empty}></View>
      </UiView>
      <UiAlert />
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    position: 'relative',
  },
  middlescreen: {
    margin: 1,
  },
});

export default Category;

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    flex: 1,
  },
  screen: {
    paddingTop: 50,
  },
  head: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
});
