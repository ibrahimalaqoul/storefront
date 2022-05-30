const intialState = {
    products : [
        {
           id : 1,
           categoryId : 1,
            name : 'premier league kits ',
                price : '$100',
                description : 'Football kits  for kids', 
                image:'https://www.soccerlord.se/wp-content/uploads/2018/07/Arsenal-Home-Kids-Football-Kit-20-21.jpg'
        },
        {
            id : 2,
            categoryId : 1,
            name : 'premier league football kits',
            price : '$200',
            description : 'premier league kits for adults',
            image:'https://cdn.givemesport.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-30-at-16.26.30-770x1024.png'

        },
        {
            id : 3,
            categoryId : 2,
            name : 'movie tickets',
            price : '$100',
            description : 'Movie tickets for adults',
            image:'https://media.istockphoto.com/vectors/two-cinema-tickets-on-white-background-movie-tickets-template-in-and-vector-id1130968476?k=20&m=1130968476&s=612x612&w=0&h=rxEuSy9-ilu8rFx015tJTf6QsqRBQ8oYf1FokY7jK80='


        },
        {
            id : 4,
            categoryId : 3,
            name : 'laptop',
            price : '$1000',
            description : 'Laptop for students',
            image:'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'

        },
        {
            id : 5,
            categoryId : 4,
            name : 'chicken',
            price : '$100',
            description : 'fried chicken',
            image:'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'

        },
        {
            id : 6,
            categoryId : 5,
            name : 'shoes',
            price : '$180',
            description : 'Shoes for customers',
            image:'https://i.pinimg.com/originals/b8/f1/8b/b8f18b6c85c5d080544cdb789629919c.jpg'

        },
        {
            id : 7,
            categoryId : 6,
            name : 'sony store',
            price : '$800',
            description : 'Sony store for gamers',
            image:'https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png'

        },

    ],
    selectedProduct : {}
}
export default function state (state = intialState, action)  {
    switch(action.type){
        case 'PRODUCT_SELECTED' :
            let selectedProduct = state.products.find(product => product.id === action.payload);
            return {
                ...state,
                selectedProduct : selectedProduct
            }
        default :
            return state;
    }
}
export const getSelectedProduct = (value) => {
    return {
        type : 'PRODUCT_SELECTED',
        payload : value
    }
}