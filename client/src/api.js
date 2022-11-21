import axios from 'axios';
//fetchProductList
export const fetchProductList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/product`)
    return data;
};

//fetchProduct
export const fetchProduct = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`)
    return data;
};