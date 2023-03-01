import github from '../assets/icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import tmdblogo from '../assets/images/TMDBicon.svg';

const Footer = () => {
  return (
    <footer className='py-12 gap-8 flex items-center border-t border-neutral-800 justify-between'>
      <div className='flex text-neutral-400 text-sm'>
        <p>© 2023 David Madrid.&nbsp;</p>
        <a
          className='flex items-center hover:text-white transition duration-100'
          target='_blank'
          href='https://www.themoviedb.org/'
        >
          <p>Powered By&nbsp;&nbsp; </p>
          <img className='h-3' src={tmdblogo} alt='' />
        </a>
      </div>
      <div className='space-x-6 flex'>
        <a href='https://github.com/DavidMadridYepez' target='_blank'>
          <img className='w-5' src={github} alt='' />
        </a>
        <a href='https://www.instagram.com/dmadridy/' target='_blank'>
          <img className='w-5' src={instagram} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/david-madrid-0809211a1/'
          target='_blank'
        >
          <img className='w-5' src={linkedin} alt='' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
