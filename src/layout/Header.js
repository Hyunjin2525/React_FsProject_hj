import {Fragment,useState,useEffect} from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <Fragment>
            <header>
                <div className="container-menu-desktop">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>

                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-menu-desktop" style={{"backgroundColor":"#C8C8FF"}}>
                        <nav className="limiter-menu-desktop container">

                            <a href="/" className="logo">
                                <h3 style={{"color":"black"}}>GoodFootballShop<span>.</span></h3>
                            </a>

                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <a href="/">홈</a>
                                    </li>

                                    <li>
                                        <NavLink to={"/shop/list"}>축구용품</NavLink>
                                    </li>

                                    <li className="label1" data-label1="hot">
                                        <NavLink to={"/news/news"}>뉴스 검색</NavLink>
                                    </li>
                                    </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="index.html"><img src="static/images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                    </div>

                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"></i>
                        </div>

                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                            <i className="zmdi zmdi-favorite-outline"></i>
                        </a>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
                    </div>
                </div>


                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>

                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>

                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                        <li>
                            <a href="index.html">Home</a>
                            <ul className="sub-menu-m">
                                <li><a href="index.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                            </ul>
                            <span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
                        </li>

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li>
                            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
                        </li>

                        <li>
                            <a href="blog.html">Blog</a>
                        </li>

                        <li>
                            <a href="about.html">About</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="static/images/icons/icon-close2.png" alt="CLOSE"/>
                        </button>

                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..."/>
                        </form>
                    </div>
                </div>
            </header>

            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart"></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					Your Cart
				</span>

                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close"></i>
                        </div>
                    </div>

                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="static/images/item-cart-01.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        White Shirt Pleat
                                    </a>

                                    <span className="header-cart-item-info">
								1 x $19.00
							</span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="static/images/item-cart-02.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Converse All Star
                                    </a>

                                    <span className="header-cart-item-info">
								1 x $39.00
							</span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="static/images/item-cart-03.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Nixon Porter Leather
                                    </a>

                                    <span className="header-cart-item-info">
								1 x $17.00
							</span>
                                </div>
                            </li>
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Total: $75.00
                            </div>

                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>

                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    )
}
export default Header;