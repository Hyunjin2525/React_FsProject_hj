import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
function Home(){
    const [shopList,setShopList]=useState([])

    const [shopThreeList,setShopThreeList]=useState([])

    useEffect(() => {
        axios.get('http://localhost/shop/main_list_react').then(res=>{
            console.log(res.data)
            setShopList(res.data)
        })

        axios.get('http://localhost/shop/main_list_three_react').then(res=>{
            console.log(res.data)
            setShopThreeList(res.data)
        })
    }, []);

    const html=shopList.map((s,key)=>{
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={s.goods_image} alt="IMG-PRODUCT"/>

                        <NavLink to={"/shop/detail/"+s.gno} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            상품 보기
                        </NavLink>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <NavLink to={"/shop/detail/"+s.gno} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {s.goods_name}
                            </NavLink>

                            <span className="stext-105 cl3">
                                       <i className="fa-solid fa-won-sign" style={{"color":"black"}}></i> {s.price}
                        </span>
                        </div>


                    </div>
                </div>
            </div>
        )
    })

    const html2=shopThreeList.map((t,key)=>{
        return(
        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">

                <img src={t.goods_image} alt="IMG-BANNER" style={{"height":"290px"}}/>

                <NavLink to={"/shop/detail/"+t.gno} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									NIKE
								</span>

                    </div>

                    <div className="block1-txt-child2 p-b-4 trans-05">
                        <div className="block1-link stext-101 cl0 trans-09">
                            Shop Now
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
        )
    })

    return(
        <Fragment>


            <section className="section-slide">
                <div className="wrap-slick1" >
                    <div className="slick1" >
                        <div className="item-slick1" style={{"backgroundImage": 'url("static/images/football_main.png")'}}>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="p-b-10" style={{"marginBottom":"20px"}}>
                        <h3 className="ltext-103 cl5">
                            NIKE BRAND
                        </h3>
                    </div>
                    <div className="row">
                        {html2}
                    </div>
                </div>
            </div>


            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10" style={{"marginBottom":"20px"}}>
                        <h3 className="ltext-103 cl5">
                            Hot Items
                        </h3>
                    </div>
                    <div className="row isotope-grid">
                        {html}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Home;