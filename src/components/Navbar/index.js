import React ,{useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,NavName, ImgWrap, Img} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const toggleSocial = () => {
        scroll.scrollToBottom()
    }

    return (
      <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <ImgWrap>
            <Img src="https://img.icons8.com/dotty/80/26e07f/mesh.png" alt="logo"/>
            </ImgWrap>
                <NavName to='/' onClick={toggleHome}>Nicolás Bejar</NavName>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={toggleSocial} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Social Media</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="mailto:n.bejar@uniandes.edu.co" >Send Message</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
}

export default Navbar;
