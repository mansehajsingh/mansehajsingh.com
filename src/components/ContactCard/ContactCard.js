import './ContactCard.css';
import { Avatar } from "@mantine/core";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ContactCard({}) {
    return (
        <div className="contact-card-container">
            <h3 className="contact-card-title">Contact Me</h3>
            <div className="contact-methods">
                <ContactMethod 
                    name={"Email"}
                    icon={<TfiEmail />} 
                    text="mansehaj.singh@uwaterloo.ca"
                    href={"mailto:mansehaj.singh@uwaterloo.ca"}
                />
                <ContactMethod 
                    name={"LinkedIn"}
                    icon={<FaLinkedin />} 
                    text="Mansehaj Singh"
                    href={"https://www.linkedin.com/in/mansehajsingh-io/"}
                />
                <ContactMethod 
                    name={"GitHub"}
                    icon={<FaGithub />} 
                    text="Mansehaj Singh"
                    href={"https://github.com/mansehajsingh"}
                />
            </div>
        </div>
    );
}

function ContactMethod({ name, icon, text, href }) {
    return (
        <a target="_blank" href={href} className="contact-method-link">
            <div className="contact-method">
                <Avatar color="rgba(0, 0, 0, 1)" variant="white" radius="xl" size="md">{icon}</Avatar>
                <div>
                    <p className="contact-method-name">{name}</p>
                    <p className="contact-method-text">{text}</p>
                </div>
            </div>
        </a>
    );
}

export default ContactCard;