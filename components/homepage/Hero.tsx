import Image from 'next/image' 

import classes from './Hero.module.css'

export default function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image 
        src='/images/site/studio-shot.png'
        alt='an image'
        width={300}
        height={300}
      />
    </div>
    <h1>Hi I'm Bohdan</h1>
    <p>A blog about webdev</p>
  </section>
}