import './NotFoundPage.css';
import Page from '../Page/Page';
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <Page title='404 NOT FOUND'>
            <p className="not-found-disclaimer">Looks like the page you are looking for doesn't exist. <Link to="/">Go to site home.</Link></p>
        </Page>
    );
}

export default NotFoundPage;