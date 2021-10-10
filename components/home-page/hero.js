/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/gal.jpg' alt='gal image' width={300} height={300} />
      </div>
      <h1>Hi, I'm Gal</h1>
      <p>
        I blog about web development - especially fronted frameworks like React nodeJS and NextJS
      </p>
    </section>
  );
}

export default Hero;
