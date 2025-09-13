function User({ children }) {
  return (
    <div
      style={{
        border: "10px solid black",
        margin: "10px",
        padding: "10px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h2>{children}</h2>
    </div>
  );
}

export default User;
