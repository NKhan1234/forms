import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [shownav, setShownav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleShownav = () => {
    setShownav((prev) => !prev);
  };

  useEffect(() => {
    const handleShowRemove = () => {
      setShownav(false);
    };

    if (shownav) {
      document.body.addEventListener("mousedown", handleShowRemove);
    }

    return () => {
      document.body.removeEventListener("mousedown", handleShowRemove);
    };
  }, [shownav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navRef.current?.classList.add("navigation");
        setShownav(false);
      } else {
        navRef.current?.classList.remove("navigation");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shownav) {
      gsap.from(".buttons1", {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "back.inOut",
      });
    }
  }, [shownav]);

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="">
          <h1>YourForm</h1>
        </div>

        <div className="buttons">
          <div className="nav">
            <h3>Home</h3>
            <h3>Pricing</h3>
          </div>
          <div className="btn" id="btn1">
            <Link to="/login" className="link">
              Log In
            </Link>
          </div>
          <div className="btn" id="btn2">
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="menu" onClick={handleShownav}>
          <p>
            <i className="ri-menu-line"></i>
          </p>
        </div>
      </div>

      {shownav && (
        <div className="buttons1">
          <div className="nav">
            <h3>Home</h3>
            <h3>Pricing</h3>
          </div>
          <div className="btn" id="btn1">
            <Link to="/login" className="link">
              Log In
            </Link>
          </div>
          <div className="btn" id="btn2">
            <Link to="/register" className="link">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
