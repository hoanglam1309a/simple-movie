import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledHomeBanner = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  .banner {
    position: relative;
    width: 100%;
    height: 500px;
  }
  .banner-overlay {
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    z-index: 10;
    inset: 0;
  }
  .banner-image {
    position: absolute;
    height: 500px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .banner-content {
    position: absolute;
    bottom: 60px;
    left: 60px;
    z-index: 20;
  }
  .banner-heading {
    font-weight: 700;
    font-size: 30px;
  }
  .banner-category {
    display: flex;
    gap: 10px;
    margin: 30px 0;
    li {
      border: 1px solid white;
      border-radius: 4px;
      padding: 6px 14px;
    }
  }
  .banner-watch {
    padding: 10px 24px;
    background-color: var(--pinkf6);
    border: 0;
    outline: none;
    color: white;
    border-radius: 6px;
  }
`;

const HomeBanner = () => {
  return (
    <StyledHomeBanner>
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <div className="banner">
            <div className="banner-overlay" />
            <img
              alt=""
              src="https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"
              className="banner-image"
            />
            <div className="banner-content">
              <h2 className="banner-heading">Puss in Boots: The Last Wish</h2>
              <ul className="banner-category">
                <li>Comedy</li>
                <li>Comedy</li>
                <li>Comedy</li>
              </ul>
              <button type="button" className="banner-watch">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledHomeBanner>
  );
};

export default HomeBanner;
