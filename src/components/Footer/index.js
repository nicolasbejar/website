import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap, SocialLogo,SocialIcons,SocialIconLink,SocialH1} from './footerElemenst'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo  onClick={toggleHome}>Nicolas Bejar</SocialLogo>
                        <SocialH1>Social Media</SocialH1>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/nicolas.bejar.5" target= "_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/nicolasbejar/" target= "_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/nicolás-bejar-2a7140190/" target= "_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/user/nicolas22199" target= "_blank" aria-label="YouTube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//github.com/nicolasbejar" target= "_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
