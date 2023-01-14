import "./styles.css";

import { useState, useEffect } from "react";
import Card from "../../components/Card";

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    // fetch("https://api.github.com/users/henriquesoto92")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url,
    //     });
    //   });

    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={() => handleAddStudent()}>
        Adicionar
      </button>

      {students.map((student, index) => (
        <Card key={index} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
