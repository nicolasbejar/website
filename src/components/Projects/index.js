import React from 'react'
import {ProjectsContainer,ProjectsH1,ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './projectsElements'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import { Button } from '../ButtonElement'

const Projects = () => {
    return (
        <ProjectsContainer id= "projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Airport Model </ProjectsH2>
                    <ProjectsP>Designed and developed airplanes and passengers traffic models using SIMIO simulation software. Tested 3 alternatives solutions to improve internal flow of pedestrians within the airport.Decreased the mean average time that pedestrians spent on the airport by 41%.</ProjectsP>
                    <Button href= "https://github.com/nicolasbejar/Airport-Model">Learn More</Button>
                </ProjectsCard>
                <ProjectsCard >
                    <ProjectsIcon  src={Icon2} />
                    <ProjectsH2 >Stocks Portfolio Analysis  </ProjectsH2>
                    <ProjectsP>Implemented Python script using Jupyter notebook to estimate portfolio average expected returns and volatility. Applied optimization algorithms to maximize portfolio expected return and implemented advanced econometric models to estimate stock prices.Increased portfolio expected return by 34%.</ProjectsP>
                    <Button href= "https://github.com/nicolasbejar/Portafolio_Optimization">Learn More</Button>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>

    )
}

export default Projects
