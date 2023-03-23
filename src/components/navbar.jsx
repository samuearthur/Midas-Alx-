import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartContext";

const Navbar = () => {

  const { cart } = useContext(CartContext)

  return (
    <div className="border-b h-24">
      <div className="container flex items-center h-full justify-between">
        <Link to="/">
          <Header as="h3" content="Midas Laundry" />
        </Link>
        <Link className="relative cursor-pointer" to="/checkout">
          <Icon name="cart" size="large" color="text-sky-600" />
          <div className="absolute -top-3 -right-3">
            <div className="rounded-full text-white font-bold flex items-center justify-center text-xs font-extrabold w-6 h-6 bg-rose-400">
              {cart?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
