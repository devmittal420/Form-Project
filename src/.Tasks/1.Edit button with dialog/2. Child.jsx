import React from "react";

const ProductList5 = ({ data, onEdit, onDelete }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "15px",
            width: "200px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <p>{item.title}</p>
          <div>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList5;
