import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I'm a Computer Science Undergrad. with research background in Artificial Intelligence and Software Development. Passionate about technology, finance, AI and Crypto. Always looking for opportunities to learn. 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Flask, React.js, Node and Java Servlet Programming.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases and Big Data</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, MongoDB, Oracle, Hadoop (HDFS), Apache Spark.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Conda, Tensorflow, Scikit-learn, OpenCV. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
