import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">
      <div className="home">
        <Navbar />

        <div className="home-1">
          <div className="home-text">
            <h1>The most affordable Typeform alternative</h1>
            <p>
              Youform is a form builder that provides UNLIMITED forms and
              responses for FREE. You can add logic, custom domains, upload
              files, embed forms on your website, and much more.
            </p>
            <button className="btn" id="btn3">
              <Link to="/register" className="link">
                Create free account
              </Link>
            </button>
            <div className="two-more">
              <p>
                <i className="ri-checkbox-circle-fill"></i>Unlimited responses
              </p>
              <p>
                <i className="ri-checkbox-circle-fill"></i>No credit card
                required
              </p>
            </div>
            <div className="profiles">
              <h3>“Youform is an absolute joy to use.”</h3>
              <div className="profile-info">
                <img src="/profile.jpg" alt="profile-img" />
                <div className="profile-text">
                  <h4>Your Name</h4>
                  <p>Your Info.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-img">
            <img src="/pic2.png" alt="home-img" />
          </div>
        </div>
        <div className="home-next">
          <img src="/pic1.png" alt="home2-img" className="home-next-img" />
          <div className="wave-container">
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              className="wave"
            >
              <path
                fill="#0099ff"
                fillOpacity="1"
                d="M0,160L80,149.3C160,139,320,117,480,106.7C640,96,800,96,960,106.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="respons">
        <div className="res-content">
          <div className="res-text">
            <h1>Fully responsive</h1>
            <p>
              Youform gives you fully responsive forms so your users will be
              able to fill your forms from mobile, desktop, or tablets.
            </p>
            <div className="btn btn5">Create free account</div>
            <div className="two-more">
              <p>
                <i className="ri-checkbox-circle-fill" id="res"></i>Unlimited
                responses
              </p>
              <p>
                <i className="ri-checkbox-circle-fill" id="res"></i>No credit
                card required
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
