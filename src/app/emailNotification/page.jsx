"use client";

export default function EmailNotification() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/emailNotification.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
