import React, { useEffect, useState } from "react";

function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch quote from API
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      setQuote({ content: "Failed to fetch quote.", author: "System" });
    } finally {
      setLoading(false);
    }
  };

  // Fetch on first render + every 30 seconds
  useEffect(() => {
    fetchQuote(); // initial fetch
    const interval = setInterval(fetchQuote, 30000); // 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1>📜 Daily Quote Generator</h1>

      <div style={styles.quoteBox}>
        {loading ? (
          <div className="spinner" />
        ) : (
          <div className="fade-in">
            <p style={styles.quoteText}>“{quote.content}”</p>
            <p style={styles.author}>— {quote.author}</p>
          </div>
        )}
      </div>

      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>

      {/* 🔽 Spinner + Fade-In Animation CSS */}
      <style>{`
        .spinner {
          width: 30px;
          height: 30px;
          border: 4px solid #ccc;
          border-top: 4px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh"
  },
  quoteBox: {
    backgroundColor: "#fff",
    padding: "25px",
    margin: "20px auto",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  quoteText: {
    fontSize: "1.2rem",
    fontStyle: "italic"
  },
  author: {
    marginTop: "10px",
    fontWeight: "bold"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default QuoteApp;
