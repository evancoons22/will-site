import React from 'react';
import Image from 'next/image';
import './about.css'

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="about-me-photo">
          <Image
            src="/myimage/myimage.jpeg"
            alt="My Photo"
            width={500}
            height={500}
          />
        </div>
        <div className="about-me-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula risus id tincidunt pellentesque. Proin malesuada diam non
            mi consectetur placerat. Cras vitae fermentum eros. Fusce et
            aliquam lorem, ut dictum ex. Morbi et orci in purus posuere
            scelerisque eget eget sapien. Sed vehicula risus id tincidunt
            pellentesque. Proin malesuada diam non mi consectetur placerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

