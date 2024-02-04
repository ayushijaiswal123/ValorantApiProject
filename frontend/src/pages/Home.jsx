import React from 'react'
import styles from './css/Home.module.css'
import buttonstyles from './css/Button.module.css'
import { Link }  from 'react-router-dom'

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div className={styles.homePage}>
      <button className={buttonstyles['button-49']} role="button" onClick= {handleClick}>
      <Link to="/roles">
      Start Game
      </Link>
      </button>
    </div>
  );
}

export default Home;