import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;
    margin-bottom: 30px;
    h1 {
        color: #fff;
    }
    > a {
        text-decoration: none;
    }
`;

export const Cart = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 20px;
    }
    strong {
        color: #fff;
        display: block;
    }
    span {
        color: #ccc;
    }
`;
