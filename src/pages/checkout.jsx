import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import { CartContext } from "../cartContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Checkout = () => {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  const showAlert = () => {
    Swal.fire({
      icon: 'success',
      text: "Order received Successfully"
    }).then(() => {
      window.location.href = "/"
      localStorage.clear()
    })
  }

  return (
    <Fragment>
      <Navbar />

      <div className="container p-10">
        <Header as="h1" content="Checkout" />
        <div className="pb-8"></div>
        <div className="flex flex-col space-y-8">
          {cart.map((item, index) => (
            <CheckoutItem product={item} key={index} />
          ))}
        </div>
        <div className="py-8 flex justify-between">
          <button className="button" onClick={() => showAlert()}><Icon name="plus cart" />Make Purchase</button>
          <button className="button" onClick={() => goHome()}>Go Home</button>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

const CheckoutItem = (props) => {
  
  const [quantity, setQuantity] = useState(0)

  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  
  return (
    <div className="grid grid-cols-4 border rounded-md p-4 items-center">
      <div className="flex flex-col col-span-2 space-y-2">
        <img
         src={"http://localhost:1337" + props.product.attributes?.thumbnail.data.attributes?.url}
          className="w-24 h-24 object-cover"
          alt=""
        />
        <p className="text-lg">{props.product.attributes?.Title}</p>
      </div>

      <div className="flex space-x-4 justify-center items-center">
        <Icon name="minus" className="cursor-pointer" onClick={() => decrement()} />
        <div className="border px-8 py-6">{quantity}</div>
        <Icon name="plus" className="cursor-pointer" onClick={() => increment()}/>
      </div>

      <div className="flex justify-center">
        <Icon name="close" />
      </div>
    </div>
  );
};

export default Checkout;
