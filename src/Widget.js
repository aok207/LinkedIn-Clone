import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget-article">
      <div className="widget-article-left">
        <FiberManualRecordIcon />
      </div>

      <div className="widget-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("EcoWave Chronicles", "Top news - 10000 readers")}
      {newsArticle("Cosmic Whispers Unveiled", "Top news - 4234 readers")}
      {newsArticle("Health Pulse Rewind", "Health - 7345 readers")}
    </div>
  );
}

export default Widget;
