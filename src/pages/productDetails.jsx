import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getProductDetails } from "../repository";

const ProductDetails = () => {

  const params = useParams()
  const [product, setProduct] = useState()
  const [activeImage, setActiveImage] = useState(null)

  const getProdDetails = async () => {
    const prod = await getProductDetails(params.product_id)
    setProduct(prod)
  }
  
  useEffect(() => {
    getProdDetails()
  }, [params])

  return (
    <Fragment>
      <Navbar />

      <div className="container py-12 flex space-x-12">
        {/* images */}
        <div className="w-2/5 flex flex-col space-y-2">
          {/* product Images */}
          <img
            src={activeImage || "http://localhost:1337" + product?.attributes?.thumbnail.data.attributes?.url}
            className="w-full h-auto object-cover"
            alt=""
          />

          {/* thumbnails */}
          <div className="flex space-x-2">
            {
              product?.attributes.images.data.map(image => (
                <img key={image.attributes?.url}
                onClick={() => setActiveImage("http://localhost:1337" + image.attributes?.url)}
                src={"http://localhost:1337" + image.attributes?.url}
                className="h-24 w-24 object-cover" alt="" />
              ))
            }
          </div>
        </div>

        {/* text & descriptions */}
        <div className="w-3/5 flex flex-col space-y-8">
          <Header as="h1" content={product?.attributes?.Title} />
          <div>
            {product?.attributes.Description}
          </div>

          <div className="flex flex-col">
            <Header as="h2" content={`GHS ${product?.attributes.Price}`} />
            <div className="flex">
              <button className="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
