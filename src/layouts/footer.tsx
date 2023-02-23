import { Link } from 'react-router-dom';
import github from '../assets/icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer className='py-12 flex border-t-2 border-neutral-800 justify-between'>
      <div className='flex text-neutral-400 text-sm'>
        <p>© 2023 David Madrid.</p>
        <a target='_blank' href=''>
          Powered by <img src='' alt='' />
        </a>
      </div>
      <div className='space-x-4'>
        <a href='https://github.com/DavidMadridYepez' target='_blank'>
          <i>git</i>
        </a>
        <a href='https://www.instagram.com/dmadridy/' target='_blank'>
          <i>ins</i>
        </a>
        <a
          href='https://www.linkedin.com/in/david-madrid-0809211a1/'
          target='_blank'
        >
          <i>lin</i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
