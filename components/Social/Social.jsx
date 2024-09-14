import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/yourusername" },
  { icon: <FaYoutube />, path: "https://youtube.com/yourchannel" },
  { icon: <FaFacebook />, path: "https://facebook.com/yourprofile" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} passHref>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;