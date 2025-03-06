"use client";
import axios from "axios";

const CreateEmployee = () => {

  const testAPI = async () => {
    try {

      const dni = 44444444;

      const res = await axios.delete(`/api/employees/delete`, { data: { dni } });

      console.log("RESPUEST", res);

    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="text-4xl">
      <h1>Tiempooox en contra como el que ve el cambio</h1>
      <button onClick={() => testAPI()}>
        Test Server
      </button>
    </div>
  );
};

export default CreateEmployee;