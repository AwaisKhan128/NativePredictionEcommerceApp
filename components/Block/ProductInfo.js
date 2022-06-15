import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import COLORS from '../../constants/COLORS';
import { getTag } from '../../utilities/tag';
import UiButton from '../UI/Button';
import UiText from '../UI/Text';
import products from '../../dummy_data/products';
import Reviews from './Reviews';
import Input from '../UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addReveiw } from '../../store/actions/cartActions';
import { generateRandom } from '../../utilities/helper';
const sizes = ['sm', 'md', 'lg', 'xl', 'xxl'];

const ProductInfoBlock = ({ data }) => {
  const state = useSelector((state) => state.review.productReviews);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const addReviewApi = (review) => {
    if (value.length > 0) {
      setIsLoading(true)
      fetch(`http://52.206.110.160:8888/predict?sentence=${review}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((data) => data.json()).then((ele) => {
        setIsLoading(false)
        const obj = {
          review: review,
          isPositive: !ele.value.startsWith("Not"),
          rating:ele.value.split('%')[1],
          ...generateRandom()
        }
        console.log(generateRandom())
        setValue("")
        dispatch(addReveiw(obj, data.id))
      }).catch((e) => {
        setValue("")
        setIsLoading(false)
      })
    }
  }

  const positive = state[data.id]?.filter((ele) => ele?.isPositive);
  const negative = state[data.id]?.filter((ele) => !ele?.isPositive)
  const positiveAggr = ((positive?.length / state[data.id]?.length) * 100).toFixed(0)
  const negativeAggr = ((negative?.length / state[data.id]?.length) * 100).toFixed(0)
  return (
    <View style={Styles.container}>
      <View style={Styles.productInfo}>
        <View style={Styles.productText}>
          <UiText style={Styles.title}>{data.title}</UiText>
          <UiText style={Styles.tag}>{getTag(data.category)}</UiText>
        </View>
        <View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <UiText style={Styles.price}>${data.price}</UiText>
          </View>
          {state[data.id]?.length && <View style={{ marginTop: 10 }}>
            {<View style={{ paddingHorizontal: 10, marginVertical: 5, backgroundColor: "rgba(50,205,50,0.8)", borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
              <UiText style={{ color: "white", textAlign: "center" }}>
                {positiveAggr}% Positive
              </UiText>
            </View>}
            {<View style={{ paddingHorizontal: 10, backgroundColor: "rgba(255,0,0,0.8)", borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
              <UiText style={{ color: "white", textAlign: "center" }}>
                {negativeAggr}% Negative
              </UiText>
            </View>}
          </View>}
        </View>

      </View>
      {data.category !== 'electronics' && (
        <View style={Styles.size}>
          <UiText style={Styles.head}>Size</UiText>
          <View style={Styles.sizes}>
            {sizes.map((data) => (
              <UiButton
                style={Styles.sizeBar}
                key={data}
                textStyle={Styles.sizeBarText}>
                {data}
              </UiButton>
            ))}
          </View>
        </View>
      )}
      <View style={Styles.description}>
        <UiText style={Styles.head}>Description</UiText>
        <UiText style={Styles.descriptionText}>{data.description}</UiText>

      </View>

      <View style={Styles.description}>
        <UiText style={Styles.head}>Reviews</UiText>
        {state[data.id]?.map((ele, ind) => {
          return <Reviews key={ind} data={ele} />
        })}
        <View style={{ flexDirection: "row", marginVertical: 10, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Input value={value} multiline={true} placeholder="add a review" onChangeText={(text) => {
              setValue(text)
            }} />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            {isLoading ? <ActivityIndicator color={COLORS.primaryColor} /> : <UiButton onPress={() => {
              addReviewApi(value)
            }} >
              Add Review
            </UiButton>}
          </View>
        </View>
      </View>
    </View>
  );
};

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
    color: COLORS.primaryColor,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: COLORS.textColorLight,
    letterSpacing: 0.2,
  },
});

export default ProductInfoBlock;
