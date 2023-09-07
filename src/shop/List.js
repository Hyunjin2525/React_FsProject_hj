import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function List(){
    const [shopList,setShopList]=useState([])
    const [fd,setFd]=useState('')
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState(0)
    const [startpage, setStartpage] = useState(0)
    const [endpage, setEndpage] = useState(0)
    useEffect(() => {
        axios.get('http://localhost/shop/list_react',{
            params:{
                fd:fd,
                page:1
            }
         }).then(res=>{
             setShopList(res.data)
        })

        axios.get('http://localhost/shop/shop_page_react', {
            params: {
                fd:fd,
                page: 1
            }
        }).then(res => {
            console.log(res.data)
            setCurpage(res.data.curpage)
            setTotalpage(res.data.totalpage)
            setStartpage(res.data.startpage)
            setEndpage(res.data.endpage)
        })
     }, []);


    //검색 리스트
    const findChange = (e) => {
        setFd(e.target.value)
    }

    const findBtn = () => {

        axios.get('http://localhost/shop/list_react',{
            params:{
                fd:fd,
                page:1
            }
        }).then(res=>{
            setShopList(res.data)
        })

        axios.get('http://localhost/shop/shop_page_react', {
            params: {
                fd:fd,
                page: 1
            }
        }).then(res => {
            console.log(res.data)
            setCurpage(res.data.curpage)
            setTotalpage(res.data.totalpage)
            setStartpage(res.data.startpage)
            setEndpage(res.data.endpage)
        })
    }

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

                        <div className="block2-txt-child2 flex-r p-t-3">
                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img className="icon-heart1 dis-block trans-04" src="../static/images/icons/icon-heart-01.png" alt="ICON"/>
                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="../static/images/icons/icon-heart-02.png" alt="ICON"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    //페이지
    const paging=(page)=>{
        axios.get('http://localhost/shop/list_react',{
            params:{
                fd:fd,
                page:page
            }
        }).then(res=>{
            setShopList(res.data)
        })

        axios.get('http://localhost/shop/shop_page_react', {
            params: {
                fd:fd,
                page:page
            }
        }).then(res => {
            console.log(res.data)
            setCurpage(res.data.curpage)
            setTotalpage(res.data.totalpage)
            setStartpage(res.data.startpage)
            setEndpage(res.data.endpage)
        })
    }

    const pageChange=(page)=>{
        paging(page)
    }
    const pagePrev=(page)=>{
        paging(page)
    }
    const pageNext=(page)=>{
        paging(page)
    }

    let p=[]
    if(startpage>1){
        p.push(<a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7" onClick={()=>pagePrev(startpage>1?startpage-1:startpage)}>&lt;</a>)
    }
    for(let i=startpage;i<=endpage;i++){
        if(i===curpage){
            p.push(<a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1" onClick={()=>pageChange(i)}>{i}</a>)
        }else{
           p.push(<a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7" onClick={()=>pageChange(i)}>{i}</a>)
        }
    }
    if(endpage<totalpage){
        p.push(<a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7" onClick={()=> pageNext(endpage<totalpage?endpage+1:endpage)}>&gt;</a>)
    }




    return(
        <Fragment>
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="panel-search w-full p-t-10 p-b-15">
                            <div className="bor8 dis-flex p-l-15" style={{"width":"350px"}}>
                                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04" onClick={findBtn}>
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                                <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" value={fd}  placeholder="상품명 검색" onChange={findChange}/>
                            </div>
                        </div>

                    </div>

                    <div className="row isotope-grid">
                            {html}
                    </div>
                    <div className="flex-l-m flex-w w-full p-t-10 m-lr--7" style={{  "display": "flex", "justify-content": "center", "align-items": "center"}}>
                        {p}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default List;