import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ name: "", phone: "", emailid: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    console.log(data);
    try {
      await axios.post("http://localhost:5000/", data);
      console.log("DATA ADDED");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <form>
        <label for="name">Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label for="phone">Phone: </label>
        <input type="number" name="phone" onChange={handleChange} />
        <br />
        <label for="email">Email: </label>
        <input type="email" name="emailid" onChange={handleChange} />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {success && (
        <div>
          <div className="w-full text-center bg-gray-950 text-slate-200">
            Success
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
