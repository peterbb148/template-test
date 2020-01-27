import React from 'react';
import styles from './hello.module.scss';
import { ReactComponent as CarlsbergLogo } from '../../img/carlsberg-symbol.svg'; 
import { Link } from 'react-router-dom';

export interface HelloProps {

}

const Hello:React.FC<HelloProps> = (props:HelloProps) => (
  <div className={styles.container}>
    <h1 className={styles.header}>Carlsberg Digital</h1>
    <p className={styles.description}>React Boilerplate</p>
    <CarlsbergLogo />
    <Link className={styles.about} to="/about">About</Link>
  </div>
)

export default Hello;
