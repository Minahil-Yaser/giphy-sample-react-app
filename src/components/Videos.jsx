import React from "react";
import {
    Gif,
    Grid, 
    SearchBar,
    SearchContext, 
    SearchContextManager, 
    SuggestionBar, 
  } from '@giphy/react-components';
import { useContext } from "react";
import { useState } from "react";

const SearchExperience = () => {
    const [itemtype, setType] = useState('videos');
    const [modalGif, setModalGif] = useState();

    return(
        <>
           <div style={{ paddingLeft:'120px',backgroundColor:'#592693', float:'left'}}>
                <select style={{height:'43px', width: '100px',backgroundColor:'#A32CC4', borderColor:'#A32CC4', color:'white', textAlign:'center'}} id="itemtype"  value={itemtype} 
                        onChange={(e) => setType(e.target.value)}>
                    <option value="videos">Videos</option>
                    <option value="gifs">Gif</option>
                    <option value="stickers">Sticker</option>
                    <option value="text">Text</option>
                </select>
            </div>
            <SearchContextManager 
                apiKey={"sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"}
                options={{
                    type: itemtype
                }}
                >
                <Components onGifClick={(gif,e) => {
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
            </SearchContextManager></>
    )
}
  
const Components = ({ onGifClick }) => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    
    return (
        <>
            <div style={{backgroundColor:"#592693", paddingLeft:'180px', paddingRight:'120px'}}>
                <div>
                    <SearchBar width={800} placeholder={"Search on GIPHY ..."}/>
                    <br></br>
                </div>
            </div>
            <div style={{backgroundColor:"#592693", padding:18}}>
                <div style={{marginLeft:105, marginRight:105}}>
                    <h5 style={{textAlign:"center", color:"white"}}>Trending Search Terms</h5>
                    <SuggestionBar width={800}/>
                </div>   
            </div>
            <br></br>

            <div style={{marginLeft:120, marginRight:50}}>
                <Grid key={searchKey} columns={4} width={1200} gutter={20} noLink={true} fetchGifs={fetchGifs} onGifClick={onGifClick}/>
            </div>
            
        </>
    )
}

const Videos = () =>{
    return(
        <SearchExperience />
    )
}

export default Videos;