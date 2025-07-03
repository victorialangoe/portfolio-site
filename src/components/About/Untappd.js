import React from "react";
import { Beer } from "lucide-react";

const UntappdCard = () => {
  const profileUrl = "https://untappd.com/user/victorialangoe";

  const stats = {
    totalBeers: 355,
    uniqueBeers: 321,
    badges: 568,
    favoriteBeer: "Dark Fruits Vanilla - Brygg X Vault City",
  };

  return (
    <div style={{
      backgroundColor: "#fff5d6",
      padding: "16px",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      maxWidth: "384px",
      color: "#4A4A4A",
      margin: "20px auto",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "12px"
      }}>
        <Beer style={{ color: "#4A4A4A", marginRight: "8px" }} />
        <h2 style={{
          fontSize: "18px",
          fontWeight: "bold",
          margin: 0
        }}>
          Untappd Profile
        </h2>
      </div>
      <p style={{ marginBottom: "4px" }}>
        <strong>Total Beers:</strong> {stats.totalBeers}
      </p>
      <p style={{ marginBottom: "4px" }}>
        <strong>Unique Beers:</strong> {stats.uniqueBeers}
      </p>
      <p style={{ marginBottom: "4px" }}>
        <strong>Badges:</strong> {stats.badges}
      </p>
      <p style={{ marginBottom: "12px" }}>
        <strong>Favorite Beer:</strong> {stats.favoriteBeer}
      </p>
      <div style={{ textAlign: "center" }}>
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            backgroundColor: "#d97706",
            padding: "8px 16px",
            borderRadius: "6px",
            fontWeight: "500",
            textDecoration: "none",
            display: "inline-block",
            transition: "background-color 0.2s",
            cursor: "pointer",
            position: "relative",
            zIndex: 9999,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#b45309"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#d97706"}
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default UntappdCard;