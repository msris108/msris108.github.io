import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      ASDE-1 @ Publicis Sapient <br />
      Ex Intern @ Zebpay  | Ex Research University of Cyprus <br />
      I'm a Computer Science Undergrad. with research background in Artificial Intelligence and Software Development. Passionate about technology, finance, AI and Crypto. Always looking for opportunities to learn. Click here to see all my <a href="https://linktr.ee/msris108"> Links </a>
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Worked on Microservices, Rest <br />
            Backend: Java | Springboot, Golang, Python, node.js <br />
            Frontend: React.js, Next.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases, Big Data and DevOps</ListTitle>
          <ListParagraph>
            Databases: MySQL, MongoDB, Oracle, Hadoop (HDFS), Apache Spark, PostgresSQL, Apache Kafka. <br />
            DevOps: AWS, Kubernetes, Docker, Jenkins
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
            Machine Learning, Deep Learning <br />
            Python, Conda, Tensorflow, Scikit-learn, OpenCV. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
