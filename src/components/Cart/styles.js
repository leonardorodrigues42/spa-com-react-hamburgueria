import styled from "styled-components"

export const CartDiv = styled.div`
    .list-container {
        box-sizing: border-box;
        min-width: 310px;
        min-height: 150px;
        max-height: 300px;
        background: #F5F5F5;
        overflow: auto;
    }

    .empty-container {
        background: #F5F5F5;
        min-width: 310px;
        min-height: 150px;
        border-radius: 6px;
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .infoCart {
            font-size: 25px;
        }

        .addProcuct {

        }
    }

    .header-cart {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        background: #27AE60;
        color: #fff;
        font-weight: 600;
        border-radius: 6px 6px 0 0;
    }

    .itemCart {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 300px;
        height: 80px;
        padding: 5px;
    }

    img {
        height: 90%;
        background: #E0E0E0;
        border-radius: 5px;
    }

    .infos {
        padding: 0 5px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .category {
        color: gray;
    }

    button {
            font-weight: 600;
            background: #93D7AF;
            height: fit-content;
            border: none;
            color: #F5F5F5;
            border-radius: 4px;
    }

    button:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }

    .divTotal {
        height: 50px;
        display: flex;
        background: #F5F5F5;
        border-top: 2px solid #E0E0E0;
        padding: 5px;
        justify-content: space-between;
        align-items: center;
        border-radius: 0 0 6px 6px;
    }

`