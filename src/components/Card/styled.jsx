import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 40px;

    h2 {
        font-size: 1.625rem;
    }

    p {
        font-size: 1.125rem;
        color: #717171;
    }

    .dateheart {
        display: flex;
        justify-content: space-between;
        max-width: 100%;

        button {
            background: transparent;
            border: none;
            
            :hover {
                cursor: pointer;
            }
        }
    }

    .card {
    width: 37%;
    max-width: 800px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
    border-radius: 4px;
    padding: 20px;
    }

    

    @media screen and (min-device-width : 481px) {
    .card {
        width: 60%;
    }    
}

    @media screen and (min-device-width : 320px) {
    .card {
        width: 80%;
    }
}
`

