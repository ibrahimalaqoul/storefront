const intialState = {
    categories: [{
        name : 'Sports',
        id : 1,
        description : 'Sports equipments',
    },
    {
        name : 'Entertainment',
        id :    2,
        description :'Entertainment Games',
        
    },
    {
        name : 'Technology',
        id :   3,
        description :'Technology stuff',
    },
    {
        name : 'Food',
        id :   4,
        description :'Food recipes',
    },
    {
        name : 'Fashion',
        id :   5,
        description :'Fashion stuff',

    },
    {
        name : 'sony store',
        id :   6,
        description :'sony store stuff',
    },
    ],
    selectedCategory : {}
}

 export default function state (state = intialState, action){
    switch(action.type){
        case 'CATEGORY_SELECTED' :
            let selectedCategory = state.categories.find(category => category.id === action.payload);
            return {
                ...state,
                selectedCategory : selectedCategory
            }
        default :
            return state;
    }
}
export const getSelectedCategory = (value) => {
    return {
        type : 'CATEGORY_SELECTED',
        payload : value
    }
}