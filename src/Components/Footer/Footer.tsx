import './Footer.scss';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="Footer">
            <div className="content">
                <Link to="/" className="box-logo">
                    <h1 className="logo">AfterLife</h1>
                </Link>
                <nav className="navbar">
                    <Link to="/Sell" className="item">
                        <a>Sell</a>
                    </Link>
                    
                    <Link to="/Help" className="item">
                        <a>Help</a>
                    </Link>
                </nav>
                <p className="copyright">Copyright © 2023-2023 AfterLife</p>
            </div>
        </div>
    )
}

export default Footer;