import { useRef, useState } from "react";
import axios from "axios";

const UncontrolledComponent = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [formErrors, setFormErrors] = useState({});
  const [validUsers, setValidUsers] = useState([]); // State to store valid users

  const onSubmit = (event) => {
    event.preventDefault();

    const usernameEnteredValue = usernameRef.current.value;
    const passwordEntered = passwordRef.current.value;

    const formErrors = validation(usernameEnteredValue, passwordEntered);

    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
    } else {
      // Hit the API
      loginApi(usernameEnteredValue, passwordEntered);
    }

    console.log(formErrors);
  };

  const validation = (username, password) => {
    const FormErrors = {};

    if (!username) {
      FormErrors.usernameError = "Please enter the username";
    } else if (username.length > 20) {
      FormErrors.usernameError = "Please enter less than 20 characters";
    }

    if (!password) {
      FormErrors.passwordError = "Please enter the password";
    } else if (password.length > 20) {
      FormErrors.passwordError = "Please enter a valid password";
    }

    return FormErrors;
  };

  const loginApi = async (username, password) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username, // Use the entered username
        password, // Use the entered password
      });

      // Check if the response contains valid user data
      if (response.data && response.data.username === username) {
        setValidUsers([...validUsers, { username, password }]); // Add to the table
      }

      console.log(response);
    } catch (err) {
      console.log("API call error:", err.response?.data || err.message);
    }
  };

  const deleteUser = (index) => {
    // Remove the user at the specified index
    const updatedUsers = validUsers.filter((_, i) => i !== index);
    setValidUsers(updatedUsers);
  };

  return (
    <>
    <h1 style={{textAlign:'center'}}>Login Form</h1>
      <form onSubmit={onSubmit} style={{width:'400px',height:'300px',backgroundColor:'aqua',textAlign:'center',marginLeft:'36%',borderRadius:'10px'}}>
        <div className="form-group" style={{marginTop:'50px'}}>
          <label htmlFor="username" style={{marginTop:'50px'}}>Email address:</label>
          <input type="text" className="form-control" id="username" ref={usernameRef} placeholder="Enter UserName" />
          <span style={{ color: 'red' }}>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef} placeholder="Enter Password"/>
          <span style={{ color: 'red' }}>{formErrors?.passwordError}</span>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default" style={{backgroundColor:'red'}}>
          Submit
        </button>
      </form>

      {/* Display the valid users in a table */}
      {validUsers.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {validUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteUser(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UncontrolledComponent;
