export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FBFF",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>🐧 ClassPlay Worlds</h1>

      <p>Learn Together · Explore Together · Grow Together</p>

      <button
        style={{
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          background: "#7CCBFF",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Create Adventure
      </button>
    </main>
  );
}
