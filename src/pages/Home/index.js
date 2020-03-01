import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductsList } from './styles';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get('/products');

        //To avoid run the function formatPrice inside component rendering
        const data = response.data.map(prod => ({
            ...prod,
            priceFormated: formatPrice(prod.price)
        }));

        this.setState({ products: data });
    }

    handleAddProduct = product => {
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_TO_CART',
            product
        });
    };

    render() {
        const { products } = this.state;
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
                                4
                            </div>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductsList>
        );
    }
}

export default connect()(Home);
