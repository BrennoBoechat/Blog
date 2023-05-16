import styled from "styled-components";


export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
;

.title {
    display: flex;
    justify-content: center;

    h2 {
        color: white;
        font-size: 1rem;
    }

    @media screen and (min-device-width : 481px) {
    .title {
        width: 60%;
    }
}

    @media screen and (min-device-width : 320px) {
    .title {
        width: 80%;
    } 
}
}

.input {
    display: flex;
    width: 100%;
    justify-content: center;
    height:100%;

    button {
        background: none;
        border: none;
    }

    input {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        border-radius: 4px;
        font-size: 0.9rem;
        opacity: 50%;
        height: 40px;
        width: 37%;
        max-width: 700px;

        }

        ::placeholder {
        color: white;
        opacity: 0.5;
        padding: 10px;
    } 

        @media screen and (min-device-width : 481px) {
    input {
        width: 60%;
    }
}

    @media screen and (min-device-width : 320px) {
    input {
        width: 80%;
    } 
}}
`
