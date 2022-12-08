import { IHomeBanner } from "@types";
import { tmdbAPI } from "apis/configAPI";
import { useQuery } from "react-query";
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
    bottom: 40px;
    left: 40px;
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
  const { isLoading, data } = useQuery("banner", () =>
    fetch(tmdbAPI.getBanners).then((res) => res.json())
  );
  if (isLoading) return <>Loading</>;
  const movies: IHomeBanner[] = data?.results || [];
  return (
    <StyledHomeBanner>
      <Swiper slidesPerView={1}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="banner">
              <div className="banner-overlay" />
              <img
                alt={movie.title}
                src={tmdbAPI.imageOriginal(movie.backdrop_path)}
                className="banner-image"
              />
              <div className="banner-content">
                <h2 className="banner-heading">{movie.title}</h2>
                <ul className="banner-category">
                  <li>Comedy</li>
                  <li>Adventure</li>
                  <li>Drama</li>
                </ul>
                <button type="button" className="banner-watch">
                  Watch Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHomeBanner>
  );
};

export default HomeBanner;
