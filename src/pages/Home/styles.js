import styled from 'styled-components';

export const ProductsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
        min-width: 300px;

        img {
            align-self: center;
            height: 200px;
        }
        > strong {
            color: #333;
            margin-top: 5px;
            font-size: 14px;
            line-height: 20px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background-color: orange;
            display: flex;
            align-items: center;
            overflow: hidden;
            margin-top: auto;
            border: none;

            transition: background-color 0.2s;

            &:hover {
                background-color: darkorange;
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background-color: rgb(0, 0, 0, 0.1);
                color: #fff;
                svg {
                    margin-right: 5px;
                }
            }
            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
