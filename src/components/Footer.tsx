// import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Footer() {
  const [moveup, setMoveup] = useState<boolean>(false);
  // const upRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMoveup(true);
      } else {
        setMoveup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (moveup) {
  //     gsap.from(".footer-p", {
  //       opacity: 0,
  //       duration: 1,
  //       x: 20,
  //       ease: "power1.inOut",
  //     });
  //   }
  // }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <h1 className="footer-h1">©️ Reserved YouForm 2024</h1>
      {moveup && (
        <p className="footer-p" onClick={scrollTop}>
          <i className="ri-arrow-up-line"></i>
        </p>
      )}
    </div>
  );
}
