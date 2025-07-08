import React from "react";
import { Beer } from "lucide-react";

type UntappdStats = {
  totalBeers: number;
  uniqueBeers: number;
  badges: number;
  favoriteBeer: string;
};

export const UntappdCard: React.FC = () => {
  const profileUrl: string = "https://untappd.com/user/victorialangoe";

  const stats: UntappdStats = {
    totalBeers: 355,
    uniqueBeers: 321,
    badges: 568,
    favoriteBeer: "Dark Fruits Vanilla - Brygg X Vault City",
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: "#fff5d6",
    padding: "16px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "384px",
    color: "#4A4A4A",
    margin: "20px auto",
    zIndex: "9999",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  };

  const statStyle: React.CSSProperties = {
    marginBottom: "4px",
  };

  const favoriteStyle: React.CSSProperties = {
    marginBottom: "12px",
  };

  const buttonContainerStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    backgroundColor: "#d97706",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "500",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.2s",
    cursor: "pointer",
  };

  const iconStyle: React.CSSProperties = {
    color: "#4A4A4A",
    marginRight: "8px",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "#b45309";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "#d97706";
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <Beer style={iconStyle} />
        <h2 style={titleStyle}>Untappd Profile</h2>
      </div>
      <p style={statStyle}>
        <strong>Total Beers:</strong> {stats.totalBeers}
      </p>
      <p style={statStyle}>
        <strong>Unique Beers:</strong> {stats.uniqueBeers}
      </p>
      <p style={statStyle}>
        <strong>Badges:</strong> {stats.badges}
      </p>
      <p style={favoriteStyle}>
        <strong>Favorite Beer:</strong> {stats.favoriteBeer}
      </p>
      <div style={buttonContainerStyle}>
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};
