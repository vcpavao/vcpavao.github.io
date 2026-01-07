export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}pavaoresumeJan2026.pdf`;

  return (
    <main style={{ padding: 16 }}>
      <a href={resumeUrl} target="_blank" rel="noreferrer">
        View resume as PDF
      </a>

      <div style={{ width: "100%", height: "85vh", border: "1px solid #ddd" }}>
        <object
          data={resumeUrl}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <iframe
            title="Resume PDF"
            src={resumeUrl}
            width="100%"
            height="100%"
          />
        </object>
      </div>
    </main>
  );
}
