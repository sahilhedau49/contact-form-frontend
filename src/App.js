import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Bounce from "react-reveal/Bounce";

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
    }, 2500);
    // console.log(data);
    try {
      await axios.post("http://localhost:5000/", data);
      // console.log("DATA ADDED");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App w-screen min-h-screen bg-slate-300 p-20">
      <h2 className="text-center font-bold text-3xl text-gray-900 mb-2">
        Contact Us
      </h2>
      <form className="form w-[30%] mx-auto p-10 rounded-xl">
        <label for="name" className="text-2xl">
          Name:
        </label>
        <br />
        <input
          className="w-[100%] mb-2 text-lg outline-none border-[2px] rounded-xl px-4 py-1 focus:border-black"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <label for="phone" className="text-2xl">
          Phone:{" "}
        </label>
        <br />
        <input
          className="w-[100%] mb-2 text-lg outline-none border-[2px] rounded-xl px-4 py-1 focus:border-black"
          type="number"
          name="phone"
          onChange={handleChange}
        />
        <br />
        <label for="email" className="text-2xl">
          Email:{" "}
        </label>
        <br />
        <input
          className="w-[100%] mb-2 text-lg outline-none border-[2px] rounded-xl px-4 py-1 focus:border-black"
          type="email"
          name="emailid"
          onChange={handleChange}
        />
        <br />
        <button
          className="block btn mx-auto my-4 text-xl border-2 px-8 py-1 rounded-full"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {success && (
        <Bounce left>
          <div>
            <div className="block mx-auto my-2 px-3 py-1 w-40 text-2xl text-center bg-green-600 text-slate-200 rounded-3xl">
              Success ✅
            </div>
          </div>
        </Bounce>
      )}
    </div>
  );
}

export default App;
