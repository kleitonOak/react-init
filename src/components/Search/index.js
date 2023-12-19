import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { bookData } from "./data";

const SectionContainer = styled.section`
    background-image: liner-gradient(90deg, #002F52 35%, #326589, 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const H2Container = styled.h2`
    color: #FFF;
    font-size: 36px;
    font-align: center;
    width: 100%;
`

const H3Container = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Search(){
    const [booksSearched, setBooksSearched] = useState([]);
    return (
        <SectionContainer>
            <H2Container>Do you know where to start?</H2Container>            
            <H3Container>Find what you looking for.</H3Container>
            <Input placeholder="Keys words" onBlur={event => {
                const resul = bookData.filter(item =>item.name.includes(event.target.value))
                setBooksSearched(resul)
            }}
            />
            {
                booksSearched.map(item=>(
                    <ResultContainer>
                        <img src={item.src} alt={item.name}/>
                        <p>{item.name}</p>
                    </ResultContainer>
                ))
            }
        </SectionContainer>
    )
}

export default Search;