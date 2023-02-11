import { Link } from 'react-router-dom';
//Icons
import github from '../assets/Icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <div>
      <footer className='container mx-auto max-w-5xl flex justify-center'>
        <div>
          <Link to=''>Contact</Link>
          <Link to=''>About</Link>
        </div>
        <div className='bg-slate-800 flex'>
          <a href='https://github.com/DavidMadridYepez' target='_blank'>
            <img className='w-8' src={github} alt='Github Profile' />
          </a>
          <a href='https://www.instagram.com/dmadridy/' target='_blank'>
            <img className='w-8' src={instagram} alt='Instagram Profile' />
          </a>
          <a
            href='https://www.linkedin.com/in/david-madrid-0809211a1/'
            target='_blank'
          >
            <img className='w-8' src={linkedin} alt='Linkedin Profile' />
          </a>
        </div>
        <p>© 2023 David Madrid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
