"use client";
import axios from "axios";

const CreateEmployee = () => {

  const testAPI = async () => {
    const res = await axios.get("/api/employees/create");
    console.log(res);
  };

  return (
    <div className="text-4xl">
      <h1>Tiempooox en contra como el que ve el cambio</h1>
      <button onClick={testAPI}>
        Test Server
      </button>
    </div>
  );
};

export default CreateEmployee;