import styled from 'styled-components'

const DivProduct = styled.div`

    box-sizing: border-box;
    width: 250px;
    height: 320px;
    display: flex;
    flex-direction: column;
    border: 3px solid #f5f5f5;
    border-radius: 5px;

    .container {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .img {
        display: flex;
        justify-content: center;
        height: 150px;
        overflow: hidden;
        background: #F5F5F5;
    }

    .category {
        font-size: 12px;
        color: grey;
    }

    .price {
        color: #27AE60;
    }

    button {
        width: fit-content;
        padding: 10px;
        height: 40px;
        background: #27AE60;
        border: none;
        color: #F5F5F5;
        border-radius: 4px;
    }

    button:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }

`
export default DivProduct