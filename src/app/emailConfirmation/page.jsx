"use clint";

export default function EmailConfirmation() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/contactConfirmation.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
