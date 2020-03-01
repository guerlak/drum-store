import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        button {
            border: 0;
            background: none;
            padding: 8px;
            background-color: orange;
            font-weight: bold;
            border-radius: 4px;
            text-transform: uppercase;
            &:hover {
                background-color: darkorange;
            }
        }
    }
`;
export const ProductTable = styled.table`
    thead th {
        text-align: left;
        padding: 12px;
        color: #999;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 120px;
    }

    strong {
        display: block;
    }

    div {
        display: flex;
        align-items: center;
        input {
            border: #eee solid 1px;
            padding: 6px;
            width: 40px;
        }

        button {
            border: 0;
            background: none;
            padding: 6px;
        }
    }

    button {
        border: 0;
        background: none;
        padding: 6px;
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;
    span {
        margin-right: 5px;
        font-size: 14px;
    }

    strong {
        margin-right: 5px;
        font-size: 24px;
    }
`;
