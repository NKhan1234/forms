import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const [forms, setForms] = useState([]);
  const [newFormName, setNewFormName] = useState("");
  const [formData, setFormData] = useState({});

  // Retrieve email from localStorage
  const email = localStorage.getItem("userEmail") || "Not Logged In";

  // Load forms from localStorage on component mount
  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem(`forms_${email}`)) || [];
    setForms(savedForms);

    // Load form data if available
    const savedFormData =
      JSON.parse(localStorage.getItem(`formData_${email}`)) || {};
    setFormData(savedFormData);
  }, [email]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleFormShow = () => {
    setFormShow(true);
  };

  const handleFormShowCancel = () => {
    setFormShow(false);
  };

  const handleSignOut = () => {
    // Clear email from localStorage
    localStorage.removeItem("userEmail");
    navigate("/register");
  };

  const handleFormNameChange = (e) => {
    setNewFormName(e.target.value);
    setFormData({ ...formData, newFormName: e.target.value });
    localStorage.setItem(
      `formData_${email}`,
      JSON.stringify({ ...formData, newFormName: e.target.value })
    );
  };

  const handleCreateForm = () => {
    const newFormId = new Date().getTime(); // Use timestamp as a simple unique ID
    const newForm = {
      id: newFormId,
      name: newFormName || `My Form`, // Default name if not provided
    };

    const updatedForms = [...forms, newForm];
    setForms(updatedForms);
    localStorage.setItem(`forms_${email}`, JSON.stringify(updatedForms));

    setNewFormName(""); // Clear the input field
    setFormData({}); // Clear the formData state
    localStorage.removeItem(`formData_${email}`); // Remove the saved form data
    setFormShow(false); // Hide the form creation UI
  };

  const handleDeleteForm = (formId) => {
    const updatedForms = forms.filter((form) => form.id !== formId);
    setForms(updatedForms);
    localStorage.setItem(`forms_${email}`, JSON.stringify(updatedForms));
  };

  return (
    <div>
      {formShow ? (
        <div className="form">
          <h4>New Form</h4>
          <div className="form-detail">
            <input
              type="text"
              placeholder="Form Name"
              value={newFormName || formData.newFormName || "My Form"}
              onChange={handleFormNameChange}
              defaultValue="My Form"
            />
            <div className="buttons3">
              <button onClick={handleFormShowCancel} className="btn9">
                Cancel
              </button>
              <button onClick={handleCreateForm} className="btn8 btn10">
                Create Form
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="dash-nav">
            <div className="dash-left">
              <h1>YouForm</h1>
              <p>
                Team <span>soon</span>
              </p>
            </div>
            <div className="dash-right">
              <button className="btn" id="btn6">
                Buy Pro
              </button>
              <img src="/profile.jpg" alt="dash-img" onClick={handleShow} />
              {show && (
                <div className="details">
                  <p>{email}</p>
                  <p onClick={handleSignOut} style={{ cursor: "pointer" }}>
                    Sign Out
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="dash-content">
            <div className="upper">
              <h4>Your Forms</h4>
              <button className="btn8" onClick={handleFormShow}>
                <i className="ri-add-line"></i> New Form
              </button>
            </div>
            <div className="form-list">
              {forms.length === 0 ? (
                <p>No forms created yet.</p>
              ) : (
                <ul className="lists">
                  {forms.map((form) => (
                    <li key={form.id} className="more-li">
                      <i
                        className="ri-close-circle-line more"
                        onClick={() => handleDeleteForm(form.id)}
                        style={{ cursor: "pointer" }}
                      ></i>
                      <Link to={`/form/${form.id}`} className="new-form">
                        <h3>{form.name}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
