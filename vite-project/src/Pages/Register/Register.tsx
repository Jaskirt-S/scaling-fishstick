import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Register = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div>{data}</div>
      <div>no hello</div>
      <Footer></Footer>
    </div>
  );
};
export default Register;
