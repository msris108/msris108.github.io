import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems : "center", color: "white", marginBottom: "20px"  }}>
          <Span>msris108</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/msris108">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/msris108">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/msris108/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/msris108">
        <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/msris108/">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://msris108.medium.com/">
        <AiFillMediumSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
  
);

export default Header;
