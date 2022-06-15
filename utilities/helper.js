const Arr = [
    {
        name: "John Doe",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg"
    },
    {
    name: "Mike Allison",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
    },
    {
        name: "Jack Micheal",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"
    },
    {
        name: "Herick Fernandes",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg"
    },
    {
        name: "Shaun Will",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg"
    },
    {
        name: "Brett Lee",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
    },
];


export function generateRandom(min = 0, max = 5) {
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;
    const Obj = Arr[rand]
    return Obj;
};

//  {
//     "2": [
//        {
//         "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
//         "isPositive": false,
//         "name": "Kahuda Baloch",
//         "rating": "54.44",
//         "review": "I am upset because of the price of the dress",
//       },
//        {
//         "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
//         "isPositive": true,
//         "name": "Deedag Baloch",
//         "rating": "76.95",
//         "review": "Great shirt. I have several good shirts and this is best from all of those i already have",
//       },
//        {
//         "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
//         "isPositive": true,
//         "name": "Deedag Baloch",
//         "rating": "90.24",
//         "review": "This shirt is great and comfortable to wear. I really like it for the price",
//       },
//        {
//         "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
//         "isPositive": false,
//         "name": "Beburg Baloch",
//         "rating": "33.34",
//         "review": "Not this what i was looking for. It looks different in physically than in online totally disappointed",
//       },
//        {
//         "image": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
//         "isPositive": true,
//         "name": "Deedag Baloch",
//         "rating": "79.68",
//         "review": "Great Quality of fabric in good price. I would really buy other stuff from you.Really recommend",
//       },
//     ]
// }