import React, {useState} from 'react';
import Button from '../ButtonElements';
import img from '../../videos/video.jpg';
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={img}></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Cassidy Chee</HeroH1>
                <HeroP>Welcome to my portfolio.</HeroP>
                <HeroBtnWrapper>
                    <Button
                    to="about"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary ='true'
                    dark ='true'
                    smooth={true} duration={500} spy={true} exact='true'
                    >
                        Read More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection