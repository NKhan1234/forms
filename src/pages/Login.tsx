import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userEmail, setUserEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
      navigate("/dashboard");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <div className="register">
        <div className="upper">
          <h1>🔤YouForm</h1>
          <div className="new-account">
            <h3>Create a new account</h3>
            <p>
              Or{" "}
              <Link to="/register" style={{ textDecoration: "underline" }}>
                create a new account
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className="main">
          {/* <button className="btn7 "><i className="ri-google-fill"></i> Login with Google</button> */}
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <input type="password" placeholder="Password" required />
            <Link to="/passreset">
              <p>Forget password?</p>
            </Link>
            <button type="submit" className="btn7 btn8">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
