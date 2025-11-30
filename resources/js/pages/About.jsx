function About() {
  return (
    <>
      <main
        style={{
          backgroundColor: "#FAF7F2",
          minHeight: "100vh",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            backgroundColor: "white",
            padding: "40px 30px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            borderLeft: "8px solid #D4A574",
          }}
        >
          <h2
            style={{
              color: "#8B4513",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            About Us
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#444",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            We believe every traveler deserves more than a standard trip plan.
            That’s why we built a platform that designs personalized journeys
            based on your budget, interests, and style. Starting with Egypt’s
            most iconic destinations, we provide detailed guides, insider tips,
            and unique travel ideas to help you explore like never before.
            <br />
            <br />
            Our mission is simple: to make your journey unforgettable, unique,
            and truly yours.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
