import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';
import * as CartActions from './actions';
import { formatPrice } from '../../util/format';

function cart({ cart, removeItem, updateAmount, total }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUB TOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(prod => (
                        <tr key={prod.id}>
                            <td>
                                <img src={prod.image} alt="tama"></img>
                            </td>
                            <td>
                                <strong>{prod.title}</strong>
                                <span>{prod.formatedPrice}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(prod)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="darkorange"
                                        ></MdRemoveCircleOutline>
                                    </button>
                                    <input readOnly value={prod.amount}></input>
                                    <button
                                        type="button"
                                        onClick={() => increment(prod)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="darkorange"
                                        ></MdAddCircleOutline>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{prod.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeItem(prod.id)}
                                >
                                    <MdDelete
                                        size={20}
                                        color="darkorange"
                                    ></MdDelete>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <Total>
                    <span>Total:</span>
                    <strong>{total}</strong>
                </Total>

                <button type="button">Finalizar Pedido</button>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(p => ({
        ...p,
        subtotal: formatPrice(p.price * p.amount)
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    )
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(cart);
