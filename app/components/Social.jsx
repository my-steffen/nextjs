import Link from  "next/link"
import { FaInstagram, FaGithub } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/steff3n_/'},
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return <Link key={index} href={item.path} className={iconStyles} target={"_blank"}>{item.icon}</Link>
            })}
        </div>
    );
}

export default Social;