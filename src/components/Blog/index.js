import React from 'react';
import './styles.css';
import bloco_image_1 from '../../assets/imgs/blog_image_1.svg';
import bloco_image_2 from '../../assets/imgs/bloco_image_2.svg';
import bloco_image_3 from '../../assets/imgs/bloco_image_3.svg';
import bloco_image_4 from '../../assets/imgs/bloco_image_4.svg';
import random from '../../assets/imgs/random.svg';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import { Link } from 'react-router-dom';

function Blog() {

   const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
   ];

   let posts = [
      {
         id: 1,
         title: "Quick-start guideto nuts and seeds",
         img: bloco_image_1,
         author: "Kevin Ibrahim",
         authorImg: random
      },
      {
         id: 2,
         title: "Nutrition: Tips for Improving Your Health",
         img: bloco_image_2,
         author: "Mike Jackson",
         authorImg: random
      },
      {
         id: 3,
         title: "The top 10 benefits of eating healthy",
         img: bloco_image_3,
         author: "Bryan McGregor",
         authorImg: random
      },
      {
         id: 4,
         title: "what are you doing with your health?",
         img: bloco_image_4,
         author: "Rafael Santana",
         authorImg: random
      },

   ];

   return (
      <div className="blog">
         <h3>Read Our Blog</h3>
         <p>Far far away, behind the word mountains, far from the countries
         <br />
         Vokalia and Consonantia, there live the blind texts.</p>
         <div className="center-align blogContainer">
            <Carousel breakPoints={breakPoints}>
               {posts.map(post => {
                  return (
                     <Item>
                        <Link key={post.id} to="/" className="blogContent">
                           <div className="col s12 m4 l4">
                              <div className="imgBlog">
                                 <img className="imgBlog" src={post.img} alt={post.title} />
                                 <p className="postTitle">{post.title}</p>
                                 <div className="author">
                                    <img src={post.authorImg} alt={post.author} />
                                    <p>{post.author}</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </Item>
                  )
               })}
            </Carousel>
         </div>
      </div>
   );
}

export default Blog;