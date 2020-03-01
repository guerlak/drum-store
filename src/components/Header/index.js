import React from 'react';
import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <h1>DrumStore</h1>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>Itens</span>
                </div>

                <MdShoppingBasket style={{ color: '#fff', fontSize: '36' }} />
            </Cart>
        </Container>
    );
}
