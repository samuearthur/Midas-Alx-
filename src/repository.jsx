import axios from "axios"

export const getCategories = async () => {
    const res = await axios.get("http://localhost:1337/api/categories")
    return res.data.data
}

export const getCategoryProducts = async (categoryId) => {
    const res = await axios.get(`http://localhost:1337/api/products?populate[0]=category&populate[1]=thumbnail&filters[category][id]=${categoryId}`)
    return res.data.data
}

export const getProductDetails = async (productId) => {
    const res = await axios.get(`http://localhost:1337/api/products/${productId}?populate[0]=thumbnail&populate[1]=images`)
    return res.data.data
}