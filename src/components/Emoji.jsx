import React from "react";
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from "@giphy/js-fetch-api";


const gf = new GiphyFetch("m3oMpfvvsyGBIvN0K5Tsm7HypdPZzAJi");
document.body.style.backgroundColor = "#d1cada"

const Emoji=()=>{
    const fetchGifs = (offset) => gf.emoji({ offset, limit: 10 })
    
    return(
        <>
        <div>
            <h2 style={{color:"#592693", textAlign: "center", paddingTop: 15}}>Emojis on GIPHY</h2>
        </div>
        <div style={{marginLeft:115, paddingTop:40}}>
            <Grid columns={4} width={1200} gutter={20} noLink={true} fetchGifs={fetchGifs} />
        </div>
        </>
    )

}

export default Emoji;