import React from 'react';
import { Container, ProductTable, Total } from './styles';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';
import tamaPic from '../../assets/imgs/products/tama.jpg';

export default function Cart() {
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
                    <td>
                        <img src={tamaPic} alt="tama"></img>
                    </td>
                    <td>
                        <strong>Tama Drums Special Series</strong>
                        <span>R$ 1.920,00</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline
                                    size={20}
                                    color="darkorange"
                                ></MdRemoveCircleOutline>
                            </button>
                            <input readOnly value={1}></input>
                            <button type="button">
                                <MdAddCircleOutline
                                    size={20}
                                    color="darkorange"
                                ></MdAddCircleOutline>
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$ 1.020,00</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="darkorange"></MdDelete>
                        </button>
                    </td>
                </tbody>
            </ProductTable>

            <footer>
                <Total>
                    <span>Total:</span>
                    <strong>R$ 2.040,00</strong>
                </Total>

                <button type="button">Finalizar Pedido</button>
            </footer>
        </Container>
    );
}
