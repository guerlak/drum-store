import React from 'react';
import { connect } from 'react-redux';
import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <h1>DrumStore</h1>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>
                        <b>{cartSize}</b> Itens
                    </span>
                </div>

                <MdShoppingBasket style={{ color: '#fff', fontSize: '36' }} />
            </Cart>
        </Container>
    );
}

const mapStateToProps = state => ({
    cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
