import { Link } from 'react-router-dom';
//Icons
import github from '../assets/Icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer className='pt-20 pb-10'>
      <div className='flex justify-around'>
        <div className='space-x-5'>
          <a href='https://porfolio-v1-pearl.vercel.app/about' target='_blank'>
            About
          </a>
          <a href='mailto:davidmadridpathway.com'>Contact</a>
          <Link to='/reference'>Reference</Link>
        </div>
        <div className='flex space-x-5'>
          <a href='https://github.com/DavidMadridYepez' target='_blank'>
            <img className='w-6' src={github} alt='Github Profile' />
          </a>
          <a href='https://www.instagram.com/dmadridy/' target='_blank'>
            <img className='w-6' src={instagram} alt='Instagram Profile' />
          </a>
          <a
            href='https://www.linkedin.com/in/david-madrid-0809211a1/'
            target='_blank'
          >
            <img className='w-6' src={linkedin} alt='Linkedin Profile' />
          </a>
        </div>
      </div>
      <p className='py-12 text-gray-400 text-'>
        © 2023 David Madrid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
