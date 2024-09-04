import { useState } from "react";
import { mobileValidations } from "./validations"; // Ensure this function is properly implemented
import { indianStates } from "./info";
import TableComponent from "../../tablehtml/table";

const ControlledForm1 = () => {
    const [formData, setFormData] = useState({
        model: "",
        mobileNumber: "",
        state: ""
    });

    const [formErrors, setFormErrors] = useState({
        modelErr: "",
        mobileErr: ""
    });

    const [submittedData, setSubmittedData] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here

        setSubmittedData([...submittedData, formData]);

        // Optionally, clear the form after submission
        setFormData({
            model: "",
            mobileNumber: "",
            state: ""
        });
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
                        name="model"
                        value={formData.model}
                        onChange={onChangeHandler}
                    />
                    {formErrors.modelErr && (
                        <span style={{ color: 'red' }}>{formErrors.modelErr}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Enter Mobile:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter Mobile Number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={onChangeHandler}
                    />
                    {formErrors.mobileErr && (
                        <span style={{ color: 'red' }}>{formErrors.mobileErr}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="state">Select State:</label>
                    <select
                        value={formData.state}
                        onChange={onChangeHandler}
                        name="state"
                        className="form-control"
                        style={{ border: '1px solid black' }}
                    >
                        <option value="" disabled>Select State</option>
                        {indianStates.map((eachState, index) => (
                            <option key={index} value={eachState.name}>
                                {eachState.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-default" style={{ backgroundColor: 'red' }}>
                    Submit
                </button>
            </form>

            <TableComponent rowData={submittedData} />
        </>
    );
};

export default ControlledForm1;
