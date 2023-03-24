import github from '../assets/icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import tmdblogo from '../assets/images/TMDBicon.svg';

const Footer = () => {
  return (
    <footer className='py-12 border-t border-neutral-800'>
      <div className='container mx-auto max-w-7xl md:flex justify-between space-y-8 md:space-y-0'>
        <div className='flex text-neutral-400 text-sm justify-center'>
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
        <div className='space-x-6 flex justify-center'>
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
      </div>
    </footer>
  );
};

export default Footer;
