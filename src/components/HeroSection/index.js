import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { NavBtnLink } from '../Navbar/NavbarElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Computer Science</HeroH1>
                <HeroH1>&</HeroH1>
                <HeroH1>Industrial Engineering Student</HeroH1>

                <HeroP>
                Currently in the final semester of my degrees, looking for professional experience. I consider myself a determined and hardworking person who is willing to learn and develop personally as well as professionally. Interested in machine learning, data science and finance
                </HeroP>
                <HeroBtnWrapper>
                    <NavBtnLink href="mailto:n.bejar@uniandes.edu.co" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary = "true" dark = "true">
                        Send Message {hover ? <ArrowForward /> : <ArrowRight/>} 
                    </NavBtnLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
