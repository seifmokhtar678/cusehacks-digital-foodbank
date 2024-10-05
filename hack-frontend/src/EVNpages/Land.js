import { Link } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
// home page === "/"
const Home = () => {
  return (
    <div>
      <div
        id="carouselFadedSlides"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner evphotos">
          <div className="carousel-item active photofixNow">
            <img
              src="/IMG/img/chargers.jpeg"
              className="evpictures d-block w-45"
              alt="PLACEHOLDER IMG"
            />
            <div className="carousel-caption">
              <h6>Your EVNews, Now!</h6>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/IMG/img/modelY.jpeg"
              className="evpictures d-block w-45"
              alt="PLACEHOLDER IMG"
            />
            <div className="carousel-caption">
              <h6>Your EVNews, Now!</h6>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/IMG/img/teslas.jpeg"
              className="evpictures d-block w-85"
              alt="PLACEHOLDER IMG"
            />
            <div className="carousel-caption">
              <h6>Your EVNews, Now!</h6>
            </div>
          </div>
        </div>
      </div>
      {/* carousel end */}
      <div>
        <Cards
          text="Terms and Vocabulary to help you get a deeper understanding of
                 the EV World"
          title="Terms"
        />
      </div>
    </div>
  );
};

export default Home;
