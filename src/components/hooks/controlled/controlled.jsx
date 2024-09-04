import { useState } from "react";
import { mobileValidations } from "./validations"; // Ensure this function is properly implemented

const ControlledForm = () => {
  const [model, setModel] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [modelError, setModelError] = useState("");
  const [mobileError, setMobileError] = useState(""); 

  const modelHandler = (event) => {
    const modelName = event.target.value;
    setModel(modelName);

    const error = modelValidator(modelName);
    if (error) {
      setModelError(error);
    } else {
      setModelError("");
    }

    console.log(modelName);
  };

  const modelValidator = (value) => {
    let error = "";
    const modelRegex = /^samsung/i;

    if (!value) {
      error = "Please enter model Name";
    } else if (!modelRegex.test(value)) {
      error = "Please enter a proper Samsung model";
    }

    return error;
  };

  const mobileHandler = (event) => {
    const mobile = event.target.value;
    setMobileNumber(mobile);

    const error = mobileValidations(mobile);
    if (error) {
      setMobileError(error);
    } else {
      setMobileError("");
    }

    console.log(mobile);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    if (modelError || mobileError) {  // Ensure to check both errors
      alert("Please fill the form properly");
    } else {
      // Hit the server
      console.log("Form Submitted Successfully");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="model">Enter device model:</label>
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="Enter Model Name"
            value={model}
            onChange={modelHandler}
          />
          {modelError && <div style={{ color: "red" }}>{modelError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Enter Mobile:</label>
          <input
            type="text"  // Changed to text to avoid leading zeros issues
            className="form-control"
            id="mobile"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={mobileHandler}
          />
          {mobileError && <div style={{ color: "red" }}>{mobileError}</div>}
        </div>
        
        <button type="submit" className="btn btn-default" style={{ backgroundColor: 'red' }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ControlledForm;
