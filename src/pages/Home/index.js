import React from 'react';
import { ProductsList } from './styles';
import { MdShoppingCart } from 'react-icons/md';
import tamaPic from '../../assets/imgs/products/tama.jpg';

export default function Home() {
    return (
        <div>
            <ProductsList>
                <li>
                    <img src={tamaPic}></img>
                    <strong>Tama Drum</strong>
                    <span>R$ 2500,00</span>
                    <button type="button">
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
                <li>
                    <img src={tamaPic}></img>
                    <strong>Tama Drum</strong>
                    <span>R$ 2500,00</span>
                    <button type="button">
                        <div>
                            <MdShoppingCart
                                size={26}
                                color="#fff"
                            ></MdShoppingCart>
                            1
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
                <li>
                    <img src={tamaPic}></img>
                    <strong>Tama Drum</strong>
                    <span>R$ 2500,00</span>
                    <button type="button">
                        <div>
                            <MdShoppingCart
                                size={26}
                                color="#fff"
                            ></MdShoppingCart>
                            2
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
                <li>
                    <img src={tamaPic}></img>
                    <strong>Tama Drum</strong>
                    <span>R$ 2500,00</span>
                    <button type="button">
                        <div>
                            <MdShoppingCart
                                size={26}
                                color="#fff"
                            ></MdShoppingCart>
                            3
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
                <li>
                    <img src={tamaPic}></img>
                    <strong>Tama Drum</strong>
                    <span>R$ 2500,00</span>
                    <button type="button">
                        <div>
                            <MdShoppingCart
                                size={26}
                                color="#fff"
                            ></MdShoppingCart>
                            3
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            </ProductsList>
        </div>
    );
}
