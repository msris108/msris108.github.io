import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { platform: 'Coursera', text: 'Deep Learning Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PFJWJUVMFJWA', },
  { platform: 'Coursera', text: 'Blockchain Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/YV849XCYVSYL', },
  { platform: 'Coursera', text: 'Tensorflow In Practice ', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AARAXAJCFLCF', },
  { platform: 'Coursera', text: 'Linear Algebra for Machine Learning', link: 'https://www.coursera.org/account/accomplishments/certificate/YNC958E4MD53', },
  { platform: 'Coursera', text: 'Agile Design', link: 'https://www.coursera.org/account/accomplishments/certificate/Y3DWFWJZ8YZS', },
  { platform: 'Coursera', text: 'Web App Development', link: 'https://www.coursera.org/account/accomplishments/certificate/V44F3DL46HJE', },
  { platform: 'NPTEL', text: 'Industrial IOT and Industry 4.0', link: '/', },
  { platform: 'NPTEL', text: 'Data Analytics with Python', link: '/'}
];

const Acomplishments = () => (
  <Section id='skills'>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} onClick={() => window.location = `${card.link}`}>
          <BoxNum>{`${card.platform}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;