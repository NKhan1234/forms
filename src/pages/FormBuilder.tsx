import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FormBuilder() {
  const { formId } = useParams();
  const [formName, setFormName] = useState("");
  const [formFields, setFormFields] = useState([]);
  const navigate = useNavigate();

  // Load existing form data if available
  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem(formId));
    if (savedForm) {
      setFormName(savedForm.formName);
      setFormFields(savedForm.formFields);
    }
  }, [formId]);

  const handleAddField = (fieldType) => {
    setFormFields([...formFields, { type: fieldType, label: "" }]);
  };

  const handleFieldChange = (index, fieldData) => {
    const updatedFields = [...formFields];
    updatedFields[index] = { ...updatedFields[index], ...fieldData };
    setFormFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to local storage with formId as the key
    const formData = { formName, formFields };
    localStorage.setItem(formId, JSON.stringify(formData));

    console.log("Form saved:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="form-builder">
      <h1>Build Your Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="Form Name"
          required
        />
        <div>
          <button type="button" onClick={() => handleAddField("text")}>
            Add Text Field
          </button>
          <button type="button" onClick={() => handleAddField("email")}>
            Add Email Field
          </button>
        </div>
        <div>
          {formFields.map((field, index) => (
            <div key={index}>
              <input
                type={field.type}
                value={field.label}
                onChange={(e) =>
                  handleFieldChange(index, { label: e.target.value })
                }
                placeholder="Field Label"
                required
              />
            </div>
          ))}
        </div>
        <button type="submit">Save Form</button>
      </form>
    </div>
  );
}

export default FormBuilder;
