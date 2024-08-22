import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mantine/core";


const Locations = {
    HOME: "",
    EXPERIENCE: "experience",
    BLOG: "blog",
    PORTFOLIO: "portfolio",
    RESUME: process.env.PUBLIC_URL + "Mansehaj_Singh_Resume_2024.pdf",
}

const NAVLINKS = [
    {
        text: "HOME",
        location: Locations.HOME
    },
    {
        text: "EXPERIENCE",
        location: Locations.EXPERIENCE
    },
    {
        text: "BLOG",
        location: Locations.BLOG
    },
    {
        text: "PORTFOLIO",
        location: Locations.PORTFOLIO
    },
    {
        text: "RESUME",
        location: Locations.RESUME,
        useAnchor: true,
    }
]

function Navbar() {

    const location = useLocation();

    return (
        <nav className="Nav">
            <div className='NavLeft'>
                <Avatar variant="filled" size="lg">MS</Avatar>
                <h1 className="name">Mansehaj Singh</h1>
            </div>
            <div className='NavRight'>
                {
                    NAVLINKS.map(link => 
                        <Navlink 
                            key={link.location} 
                            text={link.text} 
                            loc={link.location}
                            active={location.pathname === `/${link.location}`}
                            useAnchor={link.useAnchor}
                        />
                    )
                }
            </div>
        </nav>
    );
}

const Navlink = ({ text = "", loc = Locations.HOME, active = false, useAnchor = false }) => {

    if (useAnchor) {
        return (
            <a className={`Navlink ${active && 'Active-Navlink'}`} target="_blank" href={`/${loc}`}>
                {text}
            </a>
        );
    }

    return (
        <Link className={`Navlink ${active && 'Active-Navlink'}`} to={`/${loc}`}>
            {text}
        </Link>
    );
}

export default Navbar;

export { Locations };
