import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Header, Footer, GenericH2, GenereicPara } from '../styles/IndexStyles';
import { Link } from "gatsby";

export default ({ children }) => (
    <div>
        <Header>
            <GenericH2 none>
                <Link to="/" style={{color: '#fff'}}>GeekyHacker</Link>
            </GenericH2>
            <div className="menu__items">
                <Link to="/works"><GenereicPara lessSize lessSpacing grey>Works</GenereicPara></Link>
                <Link to="/about"><GenereicPara lessSize lessSpacing grey>About</GenereicPara></Link>
            </div>
        </Header>
        {children}
        <Footer>
            <div class="icons">
                <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
                <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
            </div>
            <div class="copyright">
                <span>&copy; 2019, GeekyHacker | </span>
                <span>Made with ❤️ and ☕️ in India</span>
            </div>
        </Footer>
    </div>
)