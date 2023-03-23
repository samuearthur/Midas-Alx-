import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../cartContext";

const ProductCard = (props) => {
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()

  console.log(props.product.attributes?.Price);
  return (
    <div className="product-card">
      <img
        className="h-56 w-full object-cover"
        src={"http://localhost:1337" + props.product.attributes?.thumbnail.data.attributes?.url}
        alt=""
      />
      <div className="p-5 flex flex-col">
        <div className="flex justify-between">
          <p className="font-bold">{props.product.attributes?.Title}</p>
          <p className="flex">{`GHS ${props.product.attributes?.Price}`}</p>
        </div>
        <div className="flex justify-end">
          <div className="flex">
            <Icon
              onClick={() => navigate("/product/" + props.product.id)}
              name="eye"
              size="large"
              className="hover:text-sky-400 duration-200"
            />
            <Icon
              onClick={() => setCart([...cart, props.product ])}
              name="plus cart"
              size="large"
              className="hover:text-sky-400 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
