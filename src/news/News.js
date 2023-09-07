import {Fragment,useState,useEffect} from "react";
import axios from "axios";

function News(){

    const [newsList,setNewsList]=useState([])
    const [fd,setFd]=useState('축구')

    useEffect(()=>{
        axios.get('http://localhost/news/news_find_react',{
            params:{
                fd:fd
            }
        }).then(res=>{
            console.log(res.data)
            setNewsList(res.data)
        }).catch(error=>{
            console.log(error.response)
        })
    },[fd])
    const newsChange=(e)=>{
        setFd(e.target.value)
    }
    const findBtn=()=>{
        axios.get('http://localhost/news/news_find_react',{
            params:{
                fd:fd
            }
        }).then(res=>{
            console.log(res.data)
            setNewsList(res.data)
        }).catch(error=>{
            console.log(error.response)
        })
    }
    let html=newsList.map((news)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td><a href={news.link} target={"_blank"}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html:news.title}}></h3></a> </td>
            </tr>
            <tr>
                <td dangerouslySetInnerHTML={{__html:news.desc}}></td>
            </tr>
            <tr>
                <td className={"text-right"}>{news.pubdata}</td>
            </tr>
            </tbody>
        </table>
    )
    return(
        <Fragment>
            <div className={"container"}>
            <div className={"row"}>
                <div className="flex-w flex-sb-m p-b-52">
                    <div className="panel-search w-full p-t-10 p-b-15">
                        <div className="bor8 dis-flex p-l-15" style={{"width":"350px"}}>
                            <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04" onClick={findBtn}>
                                <i className="zmdi zmdi-search"></i>
                            </button>
                            <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" value={fd}  placeholder="뉴스 검색" onChange={newsChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{"height":"10px"}}></div>
            <div className={"row"}>
                <table className={"table"}>
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
            </div>
        </Fragment>
    )
}
export default News;