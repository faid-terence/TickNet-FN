import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Testimonials.css";
import clientImage from "../../assets/images/terence 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header"></div>
        <Swiper
          loop={true}
          direction="horizontal"
          grabCursor={true}
          spaceBetween={50}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
        >
          <div className="testimonial-content">
            <div className="js-testimonial-slider">
              <div className="">
                <SwiperSlide>
                  <div className=" testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnials-item">
                    <div className="info">
                      <img src={clientImage} alt="" />
                      <div className="text-box">
                        <h3 className="name">Terence Faid JABO</h3>
                        <span className="job">Web developer</span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
            <div className="swiper-pagination js-testimonial-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
