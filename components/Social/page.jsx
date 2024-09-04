import { Instrument_Sans } from "next/font/google"
import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube, FaFacebook} from 'react-icons/fa'

const socials = [
  {icon:<FaGithub />, path:""},
  {icon:<FaLinkedin />, path:""},
  {icon:<FaYoutube />, path:""},
  {icon:<FaFacebook />, path:""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className="containerStyles">
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className="iconStyles">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social