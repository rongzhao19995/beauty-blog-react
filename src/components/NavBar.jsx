import React from 'react';

const NavBar = ( { sticky, isShowX, showHandleHamburger } ) => {
    console.log(sticky);

    return (
        <React.Fragment>
            <div className="nav-wrapper d-none d-lg-block" >
                <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
                    <div className="navbar--logo-holder">
                        <img src={sticky ? "https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-99pink.png" : "https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-995.png" } alt="nav-logo"/>
                    </div>
                    <div className="nav-opt">
                        <ul className="navbar--link">
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>HOME</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>SERVICE</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>TESTIMONIALS</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>GALLERY</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav-mobile-wrapper d-lg-none">
                <nav className={isShowX ? 'navbar-mobile c-close' : 'navbar-mobile'}>
                    <div className="navbar-header">
                        <div className="navbar-logo">
                            <img src={isShowX ? "https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-99pink.png" : "https://jevelin.shufflehound.com/beauty/wp-content/uploads/sites/18/2018/03/Group-995.png" } alt="nav-logo"/>
                        </div>
                        <div className="navbar-hamburger">
                            <div className={(isShowX ? 'hamburger opened' : 'hamburger')} onClick={showHandleHamburger}>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                        </div>
                    </div>

                    <div className={(isShowX ? 'nav-opt' : 'nav-opt close')}>
                        <ul className="navbar--link">
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>HOME</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>SERVICE</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>TESTIMONIALS</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>GALLERY</a></li>
                            <li className="navbar--link-item"><a href="#" className={`nav-link ${sticky ? "sticky" : ""}`}>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </React.Fragment>
    );
};

export default NavBar;