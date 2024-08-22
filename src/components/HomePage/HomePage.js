import './HomePage.css';
import Page from '../Page/Page';
import { FaUserGraduate } from "react-icons/fa6";

function HomePage() {
    return (
        <Page title='ABOUT ME'>
            <div className="about-content">
                <img className="about-photo" src="/aboutme.jpg"/>
                <div className="about-info">
                    <DetialCard 
                        icon={<FaUserGraduate size="40px" />}
                        text='3rd year Computer Engineering student at the University of Waterloo'
                    />
                    <p className="about-text">
                        <span className="about-poem">
                            Roses are red, 🌹<br/>
                            Violets are blue. 🪻 <br/><br/>
                            I like telling corny poems, <br/>
                            To awesome people like you.  <br/><br/>
                            I really like writing, ✏️ <br/>
                            A little fond of singing too. 🎙️<br/><br/>
                            I'm learning to play the guitar, 🎸 <br/>
                            So I can play a song for us two. 🧑‍🤝‍🧑<br/><br/>
                            Take a little gander, <br/>
                            Around my website, please do. <br/><br/>
                            Wanna get to know me? <br/>
                            We can grab a coffee in Waterloo ☕
                        </span>
                    </p>
                </div>
            </div>
        </Page>
    );
}

function DetialCard({ icon, text = "" }) {
    return (
        <div className="about-detail-card">
            {icon}<p className="about-detail-text">{text}</p>
        </div>
    );
}

export default HomePage;