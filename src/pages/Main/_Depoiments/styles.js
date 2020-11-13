import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0;

    @media (max-width: 700px) {
        p:nth-child(1) {
            font-size: 30px;
            margin: 0;
        }
        p:nth-child(2) {
            font-size: 14px;
            margin: 0;
        }
    }
`;
export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #edf2f4;
    border: none;
    padding: 40px 20px;
    max-width: 430px;
    height: 400px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.3);

    @media (max-width: 700px) {
        padding: 10px 10px;
        height: 250px
    }
`

export const Title = styled.p`
    font-size: 35px;
    font-family: Alata;
    margin: 10px 0;
`

export const Desc = styled.p`
    font-size: 18px;
    font-family: Alata;
    margin: 10px;
`
// export const TitleDepo = styled.p`
//     font-family: Alata;
//     font-size: 40px;
// `

// export const DescDepo = styled.p`
//     font-family: Alata;
//     font-size: 25px;
//     max-width: 800px;
// `
