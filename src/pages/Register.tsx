import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [userEmail, setUserEmail] = useState(""); // Set an empty string as the initial state
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
    <div className="register">
      <div className="upper">
        <h1>🔤YouForm</h1>
        <div className="new-account">
          <h3>Create a new account</h3>
          <p>
            Or{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              sign in to your account
            </Link>
          </p>
        </div>
      </div>

      <div className="main">
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn7 btn8">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
