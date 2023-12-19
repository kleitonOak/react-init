import { releaseData } from "./releaseData"
import styled from "styled-components"
import { Title } from "../Title"
// import Recommendation from "../Recommendation"
// import book2 from '../../images/livro2.png'

const ReleaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NewReleaseContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function Release(){
    return(
        <ReleaseContainer>
            <Title color='#EBDDFF'>Releases Here</Title>
            <NewReleaseContainer>
                {
                    releaseData.map(item => (
                        <img src={item.src} alt={item.name}/>
                    ))
                }
            </NewReleaseContainer>
            {/* <Recommendation title="Recommendation" subtitle="Life Hacker" description="Show time" img={book2}/> */}
        </ReleaseContainer>
    )
}

export default Release