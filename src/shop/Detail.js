import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Detail(){
    const [shopDetail,setShopDetail]=useState({})
    const {gno}=useParams()

    useEffect(() => {
        axios.get('http://localhost/shop/shop_detail',{
            params:{
                gno:gno
            }
        }).then(res=>{
            console.log(res.data)
            setShopDetail(res.data)
        })
    }, []);

    return(
    <Fragment>
        <div className="container">
            <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
                    홈
                    <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                </a>

                <a href="/shop/list" className="stext-109 cl8 hov-cl1 trans-04">
                    상품리스트
                    <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                </a>

                <span className="stext-109 cl4">
				{shopDetail.goods_name} 
			</span>
            </div>
        </div>


    <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-7 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                        <div className="wrap-slick3 flex-sb flex-w">
                            <div className="wrap-slick3-dots"></div>
                            <div className="wrap-slick3-arrows flex-sb-m flex-w" ></div>
                                <img src={shopDetail.goods_image} />
                            </div>
                        </div>
                    </div>
                            <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm" style={{"border":"1px solid black","height":"500px"}}>
                                    <h4 class="mtext-109 cl2 p-b-30">
                                        {shopDetail.goods_name}
                                    </h4>

                                    <div className="flex-w flex-t bor12 p-t-15 p-b-30" style={{"height":"50px"}}>
                                        <div className="size-208">
								<span className="stext-110 cl2">
									소비자가
								</span>
                                        </div>

                                        <div className="size-209">
								<span className="mtext-110 cl2">
                                    <i className="fa-solid fa-won-sign" style={{"color":"black","fontSize":"13px"}}></i>&nbsp;<span style={{"textDecoration":"line-through"}}>{shopDetail.cprice}</span>
								</span>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-t bor12 p-t-15 p-b-30" style={{"height":"50px"}}>
                                        <div class="size-208">
								<span class="stext-110 cl2">
									판매가
								</span>
                                        </div>

                                        <div class="size-209">
								<span class="mtext-110 cl2">
									<i className="fa-solid fa-won-sign" style={{"color":"black","fontSize":"13px"}}></i>&nbsp;{shopDetail.price}
								</span>
                                        </div>
                                    </div>

                                    <div class="flex-w flex-t bor12 p-t-15 p-b-30" style={{"height":"60px"}}>
                                        <div class="size-208 w-full-ssm">
								<span class="stext-110 cl2">
									브랜드
								</span>
                                        </div>
                                        <div className="size-209">
								<span className="mtext-110 cl2">
									{shopDetail.brand}
								</span>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                        <div className="size-208 w-full-ssm">
								<span className="stext-110 cl2">
									원산지
								</span>
                                        </div>
                                        <div className="size-209">
								<span className="mtext-110 cl2">
									{shopDetail.origin}
								</span>
                                        </div>
                                    </div>
                                    <a href="/shop/list" class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                        <span style={{"color":"white"}}>목록</span>
                                    </a>
                                </div>
                            </div>
            </div>

            <div className="bor10 m-t-50 p-t-43 p-b-40">
                    <div className=" p-t-43">
                        <div className="tab-pane">
                            <div className="row">
                                <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                    <img src={shopDetail.goods_detail_image}/>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

        <div class="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
			<span class="stext-107 cl6 p-lr-25">
				SKU: JAK-01
			</span>

            <span class="stext-107 cl6 p-lr-25">
				Categories: Jacket, Men
			</span>
        </div>
    </section>
</Fragment>
    )
}
export default Detail;