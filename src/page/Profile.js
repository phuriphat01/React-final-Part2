import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './profile.css'
import { IoIosHeart } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";

export const Profile = ({ id }) => {
    console.log(id)

    const clientId = "XU8M6LWiY2sQ-Skw-pS0LwbZf3qym2soRaSV9e79RRY";
    const [result, setResult] = useState([]);
    const [Photos, setPhotos] = useState([]);

    const imageurl = "https://api.unsplash.com/search/users?page=1&query=" + id + "&client_id=" + clientId;
    const Followurl = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&client_id=" + clientId;

    useEffect(() => {
        axios.get(imageurl).then((response) => {
            setResult(response.data.results);
        })
        axios.get(Followurl).then((response) => {
            setPhotos(response.data);
        })
    }, [id])

    return (

        <body class="body">
            {result.map(user => (
                <>
                    <div class="container" >

                        <div class="profile" key={user.id}>

                            <div class="profile-image">

                                <img src={user.profile_image.large} alt="" />

                            </div>

                            <div class="profile-user-settings">

                                <h1 class="profile-user-name">§ {user.username} §</h1>


                                <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

                            </div>

                            <div class="profile-stats">

                                <ul>
                                    <li><span class="profile-stat-count">{user.total_photos}</span> posts</li>
                                    <li><span class="profile-stat-count">{user.total_likes}</span> followers</li>
                                    <li><span class="profile-stat-count">{user.total_photos}</span> following</li>
                                </ul>

                            </div>

                            <div class="profile-bio">

                                <p><span class="profile-real-name"><b>{user.first_name}{" "}{user.last_name}</b></span> {user.bio}</p>
                                <p><span class="profile-real-name"><b>twiter:{" "}{user.twitter_username}</b></span> </p>

                            </div>

                        </div>

                    </div>
                    <hr class="hr" />
                    <div class="container" >

                        <div class="gallery">
                            {Photos.map(photo => (
                                <div class="gallery-item" tabindex="0">

                                    <img src={photo.urls.full} class="gallery-image" alt={photo.alt_description} />

                                    <div class="gallery-item-info">

                                        <ul>
                                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> <IoIosHeart />{photo.likes}</li>
                                            <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"><AiOutlineComment /></i> 2</li>
                                        </ul>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </>
            ))
            }
        </body >
    )
}
export default Profile;