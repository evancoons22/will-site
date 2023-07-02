'use client'
// import Image from 'next/image'
import styles from './page2.module.css';
import { useState } from 'react';
import VideoGallery from '../../components/video';
import PhotoGallery from '../../components/photo';
import AboutMe from '../../components/about';


export default function Home() {

    const [media, setMedia] = useState('video');

    const handleClick = (value: string) => { 
        console.log('buttonclicked');
        setMedia(value);
    }

  return (
  <div className={styles.main}>

      <div className={styles.appheader}>
          <div className={styles.titlecomponent}> 
          <div>
          logo here
          </div>
          </div>
          <div className={styles.titlecomponent}> 
              <div className={styles.icon} >
                icon1
              </div>
              <div className={styles.icon}>
                icon2
              </div>
              <div className={styles.icon} >
                icon3
              </div>
          </div>
      </div> 

      <div className={styles.bio}>
        <div className={styles.biotitle}> 
            Will Coons
        </div>
        <div className={styles.biotext}>
            title
        </div>
      </div>

      <div className={styles.selector}>
            <button className={styles.mediatypebutton} onClick={() => handleClick('video')}>
            Video 
            </button>
            <button className={styles.mediatypebutton} onClick={() => handleClick('photo')}>
            Photo
            </button>
            <button className={styles.mediatypebutton} onClick={() => handleClick('about')}>
            About
            </button>
      </div>

      <div className={styles.media}>
          {media === 'video' && <VideoGallery />}
          {media === 'photo' && <PhotoGallery />}
          {media === 'about' && <AboutMe />}
      </div>

  </div>
  )
}
