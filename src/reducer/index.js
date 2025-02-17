const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const newFeature = action.payload;
      return {
        ...state,
        additionalPrice: state.additionalPrice + newFeature.price,
        car: {
          ...state.car,
          features: [...state.car.features, newFeature],
        },
        store: state.store.filter(feature => feature !== newFeature),
      };
    case REMOVE_FEATURE:
      const featureToRemove = action.payload;
      return {
        ...state,
        additionalPrice: state.additionalPrice - featureToRemove.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature !== featureToRemove,
          ),
        },
        // store: state.store.filter(feature => feature !== featureToRemove),
        store: [...state.store, featureToRemove],
      };
    default:
      return state;
  }
};

export default reducer;
