import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { Drawer, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdDehaze } from "react-icons/md";


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
        text: "RESUME",
        location: Locations.RESUME,
        useAnchor: true,
    }
]

function Navbar() {

    const location = useLocation();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <nav className="Nav">
            <div className='NavLeft'>
                <Avatar color="rgb(31, 28, 28)" variant="filled" size="lg">MS</Avatar>
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
            <div className="NavRightSmall">
                <ActionIcon 
                    color="rgba(31, 28, 28)" 
                    variant="filled"  
                    size="xl" 
                    radius="sm"
                    onClick={open}
                >
                    <MdDehaze />
                </ActionIcon>
            </div>
            <Drawer opened={opened} onClose={close}>
                <div className="drawer-contents">
                {
                    NAVLINKS.map(link => 
                        <Navlink 
                            key={link.location} 
                            text={link.text} 
                            loc={link.location}
                            active={location.pathname === `/${link.location}`}
                            useAnchor={link.useAnchor}
                            onClick={() => {
                                if (opened) close();
                            }}
                        />
                    )
                }
                </div>
            </Drawer>
        </nav>
    );
}

const Navlink = ({ 
    text = "", 
    loc = Locations.HOME, 
    active = false, 
    useAnchor = false, 
    onClick = () => {}
}) => {

    if (useAnchor) {
        return (
            <a className={`Navlink ${active && 'Active-Navlink'}`} target="_blank" href={`/${loc}`}>
                {text}
            </a>
        );
    }

    return (
        <Link onClick={onClick} className={`Navlink ${active && 'Active-Navlink'}`} to={`/${loc}`}>
            {text}
        </Link>
    );
}

export default Navbar;

export { Locations };
