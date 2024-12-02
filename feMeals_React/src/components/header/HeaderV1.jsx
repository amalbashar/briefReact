import useSidebarMenu from '@/hooks/useSidebarMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderV1 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav brand-center-style-two dark-layout brand-center navbar-default validnavs on menu-center no-full ${isOpen ? "force-sticky navbar-responsive" : ""}`}>
                    <span className="storage-name" style={{ display: "none" }}></span>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/#">
                                <img src="/assets/img/femaelslogo.png" className="logo logo-display" alt="Logo" />
                                <img src="/assets/img/femaelslogo.png" className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">

                            <img src="/assets/img/logo.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times fa-bars"></i>
                            </button>

                            <div className="col-half left">
                                <ul className="nav navbar-nav navbar-center navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className=" megamenu-fw">
                                        <Link to={void (0)} className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>

                                    </li>



                                    <li className="dropdown">
                                        <Link to={void (0)} className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Menu</Link>
                                        <ul className="dropdown-menu animated">
                                            <li><Link to="/food-menu#">Break Fast</Link></li>
                                            <li><Link to="/food-menu-2#">Lanuch</Link></li>
                                            <li><Link to="/food-menu-3#">Dinner</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-half right">
                                <ul className="nav navbar-nav navbar-right">
                                    <li >
                                        <Link to={void (0)} className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>

                                    </li>
                                    <li className="dropdown">
                                        <Link to={void (0)} className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Shop</Link>
                                        <ul className="dropdown-menu animated">
                                            <li><Link to="/shop#">Shop</Link></li>
                                            <li><Link to="/shop-single#">Shop Single</Link></li>
                                            <li><Link to="/shop-single-2#">Shop Single Two</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;