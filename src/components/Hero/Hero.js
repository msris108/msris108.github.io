import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hi I am <br />
        Sriram Muralidharan
      </SectionTitle>
      <SectionText>
        Computer Science Engineer. <br />
      </SectionText>  
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1HxVjYC4OrSEcooLWAtJYz4Utvq93HgDM/view?usp=sharing'}> View Resume </Button>
    </LeftSection>
  </Section>
);

export default Hero;