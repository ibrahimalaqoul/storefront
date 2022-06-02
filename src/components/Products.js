
import { connect } from "react-redux";
import { addToCart } from '../store/Cart';
import { decrementProductQuantity } from '../store/products';
import Button from '@mui/material/Button';


function Products(props) {
    const products = props.reducers.products;


    return (
        <>
            {

                products.map(product => {
                    if (product.categoryId === props.catagory?.selectedCategory?.id) {
                        return (
                            <div>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <img src={product.image} alt="product" />
                                <Button onClick={() => {
                                    props.addToCart(product)
                                    props.decrementProductQuantity(product.id)
                                }
                                }>Add to Cart</Button>
                                <p>number Of items : {product.items}</p>
                            </div>
                        )
                    } else {
                        //return something here.
                        return null;
                    }

                })
            }

        </>
    );
}
const mapStateToProps = state => {
    return {
        reducers: state.preducers,
        catagory: state.creducers
    };
}
const mapDispatchToProps = {
    addToCart,
    decrementProductQuantity

}
export default connect(mapStateToProps, mapDispatchToProps)(Products);