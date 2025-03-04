import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlay } from 'react-icons/bi';

const BannerHome = () => {
    const bannerData = useSelector(state => state.movies.bannerData);
    const imageURL = useSelector(state => state.movies.imageURL);

//     const [iconSize, setIconSize] = useState(30);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth < 576) {
//         setIconSize(20);
//       } else if (window.innerWidth >= 992) {
//         setIconSize(35);
//       } else {
//         setIconSize(30);
//       }
//     }

//     handleResize(); // Initial size
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);


    return (
        <div className="container-fluid p-0 overflow-hidden">
            {/* Carousel for better user interaction */}
            <Carousel controls={true} indicators={false} interval={2000}>
                {bannerData.map((data, index) => (
                    <Carousel.Item key={index}>
                        <div className="position-relative">
                            <img
                                src={imageURL + data.backdrop_path}
                                alt={`Banner ${index}`}
                                className="img-fluid w-100 h-90"
                            />
                            {/* Gradient overlay for better text visibility */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                                }}
                            ></div>
                            {/* Text overlay */}
                            <div className="position-absolute bottom-0 start-0 text-white p-3 p-md-5">
                                <h2 className="card-title fs-4 fs-md-3 fs-lg-2"> {/* Responsive heading size */}
                                    {data.title}
                                </h2>

                                <p className="card-text d-none d-md-block fs-sm-6 fs-md-5"> {/* Responsive overview size, hidden on small screens */}
                                    {data.overview}
                                </p>

                                <p className="card-text fs-sm-6 fs-md-6 fs-lg-5"> {/* Responsive rating/views size */}
                                    Rating: {data.vote_average}+ | Views: {data.popularity}
                                </p>

                                <button className="btn btn-sm  btn-lg btn-primary fs-sm-6 fs-md-5"> {/* Responsive button text size */}
                                    <BiPlay size={30} /> Play Now
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerHome;