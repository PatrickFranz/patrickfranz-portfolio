import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import Navigation from '../components/Navigation';

export default function ProjectPage(props) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <h1>{props.pageContext.title}</h1>
    </>
  );
}
