import React from "react";
import { Gif, Carousel} from '@giphy/react-components'
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
    useParams
  } from "react-router-dom";
import { useState } from "react";
import { useAsync } from "react-async-hook";

const gf = new GiphyFetch("m3oMpfvvsyGBIvN0K5Tsm7HypdPZzAJi");
document.body.style.backgroundColor = "#d1cada"

const Giff=()=> {
    const [gif, setGif] = useState(null);
    const [modalGif, setModalGif] = useState();
    let { id } = useParams();

    useAsync(async () => {
      const { data } = await gf.gif(id);
      setGif(data);

    }, []);
    console.log('gif', gif);
    return(
        <>
        <div>
            {(() => {
                    if (gif == null) {
                    return (
                        console.log('itwasnull', gif)
                    )
                    } else {
                    return (
                        <>
                            <h3 style={{color:"#592693", textAlign: "center", paddingTop: 15, paddingBottom: 25}}>{gif.title}</h3>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <Gif gif={gif} width={300} noLink={true}/>
                            </div>
                            <br></br>
                            <h2 style={{color:"#592693", paddingTop:20,paddingBottom:20, textAlign:"center"}}>Related {gif.type}s</h2>
                            <Related gid={gif.id} gtype={gif.type} 
                            onGifClick={(gif) => {
                                console.log("gif", gif.type);
                                setModalGif(gif);
                            }}/>
                             {modalGif && ( 
                                <div
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: "rgba(0, 0, 0, .8)"
                                    }}
                                >
                                <div> 
                                    <Gif gif={modalGif} width={400} height={400} noLink={true} /><br></br>
                                    <button style={{backgroundColor:"#592693", borderColor:"#592693", borderRadius:"10px", padding:"10px"}}>  <a style={{color:"white", fontSize:"20px"}} href={"/giphy-sample-react-app/"+modalGif.type+"/"+modalGif.id}>View Details</a></button>
                                        
                                </div>
                                </div>  
                            )}
                            <br></br>
                            <br></br>
                        </>
                    )
                    }
            })()}
           
        </div>
        </>
    )

};

const Related=({onGifClick})=>{
    let { id } = useParams();
    let { type } = useParams();
    
    if (type === 'text') {
        const fetchGifs = (offset) => gf.related(id, { offset, limit: 10, type: type })
        return(

            <div style={{ marginLeft:160,marginRight:160}}>
                <Carousel gifHeight={200} gutter={16} noLink={true} fetchGifs={fetchGifs} onGifClick={onGifClick} />
            </div>
        )
    }
    else{
        const fetchGifs = (offset) => gf.related(id, { offset, limit: 10, type: type+'s' })
        return(

            <div style={{ marginLeft:160,marginRight:160}}>
                <Carousel gifHeight={200} gutter={16} noLink={true} fetchGifs={fetchGifs} onGifClick={onGifClick} />
            </div>
        )
    }
};

export default Giff;