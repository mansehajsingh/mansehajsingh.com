import ContactCard from '../ContactCard/ContactCard';
import './Page.css';

function Page({ title = "", children }) {

    return (
        <div className="page">
            <div className="page-row">
                <div className="page-sidebar">
                    <div className="page-banner">Currently seeking Summer 2025 roles!</div>
                    <ContactCard />
                </div>
                <div className="page-main">
                    <h1 className="page-title">{title}</h1>
                    <div className="page-content">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
