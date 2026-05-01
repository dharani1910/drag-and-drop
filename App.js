import React, { useState } from "react";

export default function App() {
  const [fileName, setFileName] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      alert("PDF dropped successfully ✅");
    } else {
      alert("Only PDF files allowed ❌");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2> Drag & Drop App</h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: 320,
          height: 200,
          border: "2px dashed #555",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          cursor: "pointer",
          marginTop: 20,
        }}
      >
        Drag & Drop PDF here
      </div>

      {fileName && (
        <div style={{ marginTop: 20 }}>
          <h3 style={{ color: "green" }}>
            Selected File: {fileName}
          </h3>
        </div>
      )}
    </div>
  );
}