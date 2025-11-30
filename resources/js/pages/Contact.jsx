function Contact() {
  return (
    <>
      <main>
        <div
          style={{
            maxWidth: "800px",
            margin: "50px auto",
            background: "#ffffff",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.3rem",
              fontWeight: "700",
              color: "#222",
              marginBottom: "25px"
            }}
          >
            Contact
          </h2>

          <section>

            <form action="#" method="post">

              {/* Name */}
              <section style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <label
                  htmlFor="name"
                  style={{ fontWeight: "600", marginBottom: "8px", color: "#222" }}
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    fontSize: "1rem",
                    background: "#fafafa",
                    transition: "0.3s ease"
                  }}
                />
              </section>

              {/* Email */}
              <section style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{ fontWeight: "600", marginBottom: "8px", color: "#222" }}
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    fontSize: "1rem",
                    background: "#fafafa",
                    transition: "0.3s ease"
                  }}
                />
              </section>

              {/* Message */}
              <section style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <label
                  htmlFor="message"
                  style={{ fontWeight: "600", marginBottom: "8px", color: "#222" }}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Type your message here..."
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    fontSize: "1rem",
                    background: "#fafafa",
                    transition: "0.3s ease",
                    resize: "vertical"
                  }}
                ></textarea>
              </section>

              {/* Button */}
              <section>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    border: "none",
                    background: "#0077b6",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#005f86";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#0077b6";
                  }}
                >
                  Send
                </button>
              </section>

            </form>

          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
