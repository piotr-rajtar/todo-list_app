import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <h2>{faqData.header}</h2>
    <ul>
      <li>
        <p>{faqData.Question1}</p>
        <p>{faqData.Answer1}</p>
      </li>
      <li>
        <p>{faqData.Question2}</p>
        <p>{faqData.Answer2}</p>
      </li>
      <li>
        <p>{faqData.Question3}</p>
        <p>{faqData.Answer3}</p>
      </li>
    </ul>
  </Container>
);
  
export default FAQ;