import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Reseach Profiles</LinkTitle>
          <LinkItem href="https://www.researchgate.net/profile/Sriram-Muralidharan-3">
            ReseachGate
          </LinkItem>
          <LinkItem href="https://scholar.google.com/citations?user=Xm7bBboAAAAJ&hl=en">
            Google Scholar
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Content</LinkTitle>
          <LinkItem href="https://www.youtube.com/channel/UCHxExKe5-FWmsS6mU_b6COQ">
            Youtube
          </LinkItem>
          <LinkItem href="https://dev.to/msris108">
            Dev.to
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:msris108@gmail.com">
            msris108@gmail.com
          </LinkItem>
          <LinkItem href="mailto:sriram18168@cse.ssn.edu.in">
            sriram18168@cse.ssn.edu.in
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"There are no Oogways" - Master Accident</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;