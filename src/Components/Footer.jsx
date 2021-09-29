import { Link } from 'react-router-dom'
import '../Styles/footer.css'
import Button from './Button'
import logo from '../Images/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_form">
                <h2>Subscribe to our newsletter</h2>
                <input type="text"
                    placeholder="Enter your email"
                    className="subscribe__input"
                />
                <Button className="subscribe__btn">Subscribe</Button>
            </div>
            <div className="footer_bottom">
                <div className="logo">
                   <img src={logo} alt="pondsec logo" />
                </div>
                <div className="footer_list">
                    <div className="footer_address">
                    <p>Women Techsters</p>
                    <p>Team A</p>
                    </div>
                    <div className="footer_nav_group">
                           <div className="footer_nav">
                           <p className="nav_header"> About </p>
                        <ul className="footer_nav_links">
                        <li>
                        <Link to="/about" className="footer_nav_link">Company</Link>
                    </li>
                    <li>
                        <Link to="/features" className="footer_nav_link">Features</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="footer_nav_link">Careers</Link>
                    </li>
                        </ul>
                           </div>
                            <div className="footer_nav">
                           <p className="nav_header"> Help </p>
                        <ul className="footer_nav_links">
                        <li>
                        <Link to="/about" className="footer_nav_link">Support</Link>
                    </li>
                    <li>
                        <Link to="/features" className="footer_nav_link">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="footer_nav_link">Guide</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="footer_nav_link">Reports</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="footer_nav_link">Q&amp;A</Link>
                    </li>
                        </ul>
                           </div>
                           <div className="footer_socials">
                               <h5>Social Media </h5>
                               <div className="social-media_links">
                               <div className="social_link">
                        <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="social_link"><i className="fab fa-twitter"></i></div>
                        <div className="social_link">
                        <i className="fab fa-instagram"></i>
                        </div>
                               </div>
                       
                           </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
