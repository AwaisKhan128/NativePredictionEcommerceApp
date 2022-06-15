import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
    productReviews: {
        "2": [
            {
             "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
             "isPositive": false,
             "name": "John Doe",
             "rating": "54.44",
             "review": "I am upset because of the price of the dress",
           },
            {
             "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
             "isPositive": true,
             "name": "Mike Allison",
             "rating": "76.95",
             "review": "Great shirt. I have several good shirts and this is best from all of those i already have",
           },
            {
             "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
             "isPositive": true,
             "name": "Jack Micheal",
             "rating": "90.24",
             "review": "This shirt is great and comfortable to wear. I really like it for the price",
           },
            {
             "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
             "isPositive": false,
             "name": "Herick Fernandes",
             "rating": "33.34",
             "review": "Not this what i was looking for. It looks different in physically than in online totally disappointed",
           },
            {
             "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
             "isPositive": true,
             "name": "Shaun Will",
             "rating": "79.68",
             "review": "Great Quality of fabric in good price. I would really buy other stuff from you.Really recommend",
           },
         ]
    },
    type: null,
};

const reveiws = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_REVIEW":
            var nodeExist = state.productReviews.hasOwnProperty(payload.id);
            if (nodeExist) {
                var oldReviews = state.productReviews[payload.id];
                oldReviews.push(payload.newReview)
                return {
                    ...state,
                    productReviews: {
                        ...state.productReviews,
                        [payload.id]: oldReviews
                    }
                }
            } else {
                return {
                    ...state,
                    productReviews: {
                        ...state.productReviews,
                        [payload.id]: [payload.newReview]
                    }
                }
            }
        default:
            return state;
    }
};

export default reveiws;
