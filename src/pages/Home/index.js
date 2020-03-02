import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ProductsList } from './styles';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../Cart/actions';

class Home extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get('/products');

        //To avoid run the function formatPrice inside component rendering
        const data = response.data.map(prod => ({
            ...prod,
            formatedPrice: formatPrice(prod.price)
        }));

        this.setState({ products: data });
    }

    handleAddProduct = product => {
        const { addItem } = this.props;
        addItem(product);
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <ProductsList>
                {products.map(prod => (
                    <li key={prod.id}>
                        <img src={prod.image} alt={prod.title}></img>
                        <strong>{prod.title}</strong>
                        <span>{prod.priceFormated}</span>
                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(prod)}
                        >
                            <div>
                                <MdShoppingCart
                                    size={26}
                                    color="#fff"
                                ></MdShoppingCart>
                                {amount[prod.id] || 0}
                            </div>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductsList>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
