import React from 'react'
import styled from "../BlogRent/BlogRent.module.scss"
const BlogRent = () => {
  return (
    <div className={styled.blogrent}>
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                <h2>Rent<span>Insights.</span></h2>
                <h5>Get the latest multifamily marketing insights, guides, trends and tips here.</h5>
                <button>Explore</button>
                <h4>Stay in touch!</h4>
                <input type="email" placeholder='Email Adress*' />
                <div className={styled.bottomrent}>
                <h5>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</h5>
                <button>Sumbit</button>
                </div>

                </div>
                <div className="col-xl-6">
                    <img src="https://solutions.rent.com/wp-content/uploads/2023/04/audience-targeting-blog-cover.jpg" alt="" />
                    <div className={styled.bottomside}>
                    <span>04/27/2023 in <a href=""> Paid Search</a></span>
                    <div className={styled.links}>
                    <a href="">How to future-proof your property’s advertising to keep reaching renters</a>
                    </div>
                    <div className="row">
                    <div className="col-4">
                       <div className={styled.profileimg}>
                       <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp" alt="" />
                       <span>by</span> 
                       <p>Rachel Richardson</p>
                       </div>
                    </div>
                    <div className="col-8">
                       <div className={styled.buttons}>
                       <button>#Search ads</button>
                       <br />
                        <button>#Social Ads</button>
                        <br />
                        <button>#Multifamily Advertising</button>
                        <br />  
                        <button>#First Party Data</button>
                       </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default BlogRent
