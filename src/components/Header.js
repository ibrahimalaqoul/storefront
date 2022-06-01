import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './Header.css';
import { connect } from "react-redux";
import {toggleCart} from '../store/Cart';
 
function Header(props) {
     
  return (
    <header>

   <h1 className='headerH'>
       My store
   </h1>
   <ButtonGroup disableElevation variant="contained" className='cart'>

      <Button onClick={()=>{
        props.toggleCart();
        console.log(props.cart);
      }}>{props.cart.active? " Close Cart":"Cart"} {props.cart.CartItemsCount}</Button>
      
    </ButtonGroup>
    </header>
  );
}
const mapStateToProps = state => {
  return {
      cart: state.cart,
  };
}
const mapDispatchToProps =  {
  toggleCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);