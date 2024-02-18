import React from "react";
import Giphy from "./components/Giphy"
import GIFs from "./components/GIFs"
import Stickers from "./components/Stickers"
import Videos from "./components/Videos"
import Text from "./components/Text"
import Emoji from "./components/Emoji"
import GIF from "./components/Gif"
import { BrowserRouter, 
    Routes, 
    Route,} 
   from "react-router-dom";


const App = () => {
    return(
       <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="" element={<Giphy />} />
                <Route path="/gifs" element={<GIFs />} />
                <Route path="/stickers" element={<Stickers />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/text" element={<Text />} />
                <Route path="/emojis" element={<Emoji />} />
                <Route path="/:type/:id" element={<GIF />} />
            </Routes>
        </BrowserRouter>
       </>
    )
};

export default App;