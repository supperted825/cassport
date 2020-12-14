import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 80px;
    align-items: center;
    background: #fff;

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.01);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 4rem;
    color: #D5ACA;
    padding-top: 5rem;
    margin-bottom: 64px;
    font-family: 'Dancing Script', cursive;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: center;
`

export const Column = styled.div`
    flex: auto;
    max-width: 25%;
    padding: 0 4px;

    @media screen and (max-width: 1200px) {
        flex: 50%;
        max-width: 50%;
    }

    @media screen and (max-width: 768px) {
        flex: 100%;
        max-width: 100%;
    }

`

export const ColumnImg = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }
`