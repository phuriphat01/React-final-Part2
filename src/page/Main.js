import Image from '../components/UnsplashImage';
import React, { useState } from 'react'
import axios from 'axios';
import '../index.css';
import '../App.css';

function Main(props) {
    const [imagefind, setImage] = useState();
    const clientId = "XU8M6LWiY2sQ-Skw-pS0LwbZf3qym2soRaSV9e79RRY";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
        const imageurls = "https://api.unsplash.com/search/photos?page=1&query=" +
            imagefind + "&client_id=" + clientId;
        axios.get(imageurls).then((response) => {
            setResult(response.data.results);
        })

    };

    //////////////////////////////////////////////

    return (

        <body>
            <div class="containers">
                <div class="text-box">
                    <h3>Mystagram</h3>
                    
                </div>
                <center>
                    

                </center>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                <input type="text" name="image" class="search" onClick={handleChange} placeholder="ค้นหารูป" />


                {
                    result.map(image => (

                        <Image image={image} />


                    ))
                }

            </div>

        </body >
    );
}
export default Main;