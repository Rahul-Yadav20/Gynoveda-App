import React from 'react'

const Carousel = () => {
    return (
        <div className="carousel w-full h-[500px] mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://bl-i.thgim.com/public/incoming/n0kgn9/article66621385.ece/alternates/FREE_1200/%28L-R%20-%20Dr%20Aarati%20Patil%2C%20Vishal%20Gupta%2C%20Rachana%20Gupta%20Co-Founders%20Gynoveda%29.jpg" className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0074/4036/7716/files/Landing_Page___PCOS___Web.jpg?v=1716802221" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0074/4036/7716/files/Landing_Page___Jeehv___Web_v2.jpg?v=1716807117" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn bg-none btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
          
        </div>
    )
}

export default Carousel
