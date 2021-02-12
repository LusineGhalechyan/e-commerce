const defaultState = {
  products: [
    { id: 1, title: `Sofa Francesca`, price: `300`, src: `assets/1sofa.png` },
    { id: 2, title: `Sofa Francesca`, price: `300`, src: `assets/2sofa.png` },
    { id: 3, title: `Sofa Francesca`, price: `300`, src: `assets/3sofa.png` },
    { id: 4, title: `Sofa Francesca`, price: `300`, src: `assets/4sofa.png` },
  ],
};

const productReducer = (state = defaultState, action) => {
  return state;
};

export default productReducer;
