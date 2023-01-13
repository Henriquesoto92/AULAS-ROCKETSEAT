import "./styles.css";

import { Card } from "../../components/Card";
import { useState } from "react";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1> Nome: {studentName}</h1>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Henrique" time="10:55:55" />
      <Card name="Maike" time="05:55:54" />
    </div>
  );
}
