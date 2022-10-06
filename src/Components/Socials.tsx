import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  const size = 35;

  return (
    <div className='flex flex-wrap justify-center items-center gap-3'>
      <SocialIcon
        target="_blank" rel="noopener noreferrer"
        url='https://www.linkedin.com/in/surya-t/'
        style={{ height: size, width: size }}
      />
      <SocialIcon
        target="_blank" rel="noopener noreferrer"
        url='https://github.com/surya-sanity'
        style={{ height: size, width: size }}
        bgColor="white"
      />
      <SocialIcon
        target="_blank" rel="noopener noreferrer"
        url='https://www.instagram.com/sanitycodes/'
        style={{ height: size, width: size }}
      />
      <SocialIcon
        target="_blank" rel="noopener noreferrer"
        url='mailto:surya.sanity@gmail.com'
        style={{ height: size, width: size }}
        bgColor="white"
      />

    </div>
  )
}
export default Socials