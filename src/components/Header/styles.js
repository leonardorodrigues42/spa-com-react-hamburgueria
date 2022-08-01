import styled from "styled-components"

export const HeaderStyled = styled.header`
    
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    background: #F5F5F5;
    margin-bottom: 50px;
    box-shadow: 0px 0px 5px -1px #000000;

    .header-container {
        display: flex;
        width: 1250px;
        justify-content: space-between;
        align-items: center;
    }

    img:hover {
        cursor: pointer;
    }

    form {
        display: flex;
        box-sizing: border-box;
        height: 40px;
        border: 2px solid #ccc;
        border-radius: 5px;
        padding: 4px;
        background: #fff;

        input {
            border: none;
        }

        input:focus {
            outline: 0;
            box-shadow: 0 0 0 0;
        }
        
        button {
            font-weight: 600;
            background: #27AE60;
            border: none;
            color: #F5F5F5;
            border-radius: 4px;
        }

        button:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`