import React from 'react';
import styles from './about.module.scss';

export interface AboutProps {

}

const About:React.FC<AboutProps> = () => (
  <div className={styles.container}>
    <p className={styles.angry} >I'm not gonna tell you about this here!</p>
    <p className={styles.guide} >Just open the README...</p>
  </div>
);

export default About;