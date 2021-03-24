import React from 'react';
import { FaHeart } from "react-icons/fa";
import '../index.css';
import '../App.css';

const Image = ({ image }) => {
  return (
    <>
      <body>
        <center>
          <section class="photo" >
            <header class="photo__header">
              <div class="photo__header-column">
                <a href={"/profile/" + image.user.username}>
                  <img class="photo__avatar" src={image.user.profile_image.large} />
                </a>
              </div>
              <div class="photo__header-column">
                <a href={"/profile/" + image.user.username}><span class="photo__username">{image.user.first_name}</span>
                </a>
              </div>
            </header>
            <div class="photo__file-container">
              <img class="photo__file" src={image.urls.raw} />
            </div>
            <div class="photo__info">
              <div class="photo__icons">
                <span class="photo__icon">
                  <i class="fa fa-heart-o heart fa-lg"></i>
                </span>
                <span class="photo__icon">
                  <i class="fa fa-comment-o fa-lg"></i>
                </span>
              </div>
              <span class="photo__likes"><FaHeart />{" "} {image.likes} likes</span>
              <div class="photo__comments">
                <div class="photo__comment">
                  <span class="photo__comment-author">
                    {image.user.username}</span>{image.alt_description}
                </div>
              </div>
            </div>

          </section>
        </center>
      </body>


    </>
  )
}
export default Image;