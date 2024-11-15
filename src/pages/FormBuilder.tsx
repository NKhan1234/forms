import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface FormField {
  type: string;
  label: string;
}

function FormBuilder() {
  const { formId } = useParams<{ formId: string }>();
  const [formName, setFormName] = useState<string>("");
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const navigate = useNavigate();

  // Load existing form data if available
  useEffect(() => {
    if (formId) {
      const savedForm = localStorage.getItem(formId);
      if (savedForm) {
        const parsedForm = JSON.parse(savedForm) as {
          formName: string;
          formFields: FormField[];
        };
        setFormName(parsedForm.formName);
        setFormFields(parsedForm.formFields);
      }
    }
  }, [formId]);

  const handleAddField = (fieldType: string) => {
    setFormFields([...formFields, { type: fieldType, label: "" }]);
  };

  const handleFieldChange = (index: number, fieldData: Partial<FormField>) => {
    const updatedFields = [...formFields];
    updatedFields[index] = { ...updatedFields[index], ...fieldData };
    setFormFields(updatedFields);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formId) {
      // Save form data to local storage with formId as the key
      const formData = { formName, formFields };
      localStorage.setItem(formId, JSON.stringify(formData));

      console.log("Form saved:", formData);
      navigate("/dashboard");
    }
  };

  return (
    <div className="form-builder">
      <h1>Build Your Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormName(e.target.value)
          }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
