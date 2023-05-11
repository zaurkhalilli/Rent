import React from 'react'
import styled from "../DetailRelated/DetailRelated.module.scss"
const DetailRelated = () => {
  return (
    <div className={styled.related}>
      <h2>Related Posts</h2>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
            <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/IMG_9369b-1.jpg" alt="" />
           <div className="row">
           <div className="col-9">
            <div className={styled.relatebtn}>
            <button>#Mulitfamily Advertising</button> 
            <button>#Multifamily Marketing</button>
            <button>#Property Brand</button>
            <button>#Brand Awareness</button>
            </div>
            </div>
            <div className="col-3">
            <span>05/04/2022</span>
            </div>
           </div>
            <div className={styled.links}>
                <a href="">AIM 2022: What property marketers can learn from major brands</a>
            </div>
            </div>
            
            <div className="col-xl-6">
                <img src="	https://solutions.rent.com/wp-content/uploads/2023/04/audience-targeting-blog-cover.jpg" alt="" />
                <div className="row">
           <div className="col-9">
            <div className={styled.relatebtn}>
            <button>#Mulitfamily Advertising</button> 
            <button>#Multifamily Marketing</button>
            <button>#Property Brand</button>
            <button>#Brand Awareness</button>
            </div>
            </div>
            <div className="col-3">
            <span>05/04/2022</span>
            </div>
           </div>
            <div className={styled.links}>
                <a href="">AIM 2022: What property marketers can learn from major brands</a>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailRelated
