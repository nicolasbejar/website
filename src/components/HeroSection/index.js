import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
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
                <HeroH1>Computer Scinece </HeroH1>
                <HeroH1>&</HeroH1>
                <HeroH1>Industrial Engineering Student</HeroH1>

                <HeroP>
                    Send me a message if you liked my profile
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary = "true" dark = "true">
                        Send Message {hover ? <ArrowForward /> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
