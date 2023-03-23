import { Fragment, useContext, useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../cartContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";
import { getCategories, getCategoryProducts } from "../repository";

const Home = () => {

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState({})
  const [products, setProducts] = useState([])

  const getAllCategories = async () => {
    const res = await getCategories()
    setSelectedCategory(res[0])
    setCategories(res) 
  }

  const getProducts = async () => {
    const res = await getCategoryProducts(selectedCategory.id)
    setProducts(res)
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  useEffect(() => {
    getProducts()
  }, [selectedCategory])

  return (
    <Fragment>
      <Navbar />
      
      <div className="container">
        <div className="flex">
          <div className="w-1/5 py-8">
            <div className="w-full border-r pr-2">
              {categories.map((item) => (
                <div className="category" key={item.id} onClick={() => setSelectedCategory(item)}>
                  <Icon name="shopping bag" color="text-gray-400" />
                  <p>{item.attributes.Category}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grow px-8 py-12">
            <p className="pb-2 text-lg font-semibold">
              Products for "{selectedCategory.attributes?.Category}"
            </p>
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard product={product} key={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </Fragment>
  );
};

export default Home;
