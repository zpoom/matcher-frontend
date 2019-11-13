import React from 'react'
import './index.css'

interface WorkshopInfo {
  title?: string,
  ownerName?: string,
  backgroundImage?: string
}

export default ({ 
  title = "Workshop Name", 
  ownerName = "Matcher Team",
  backgroundImage = "https://picsum.photos/600/300"
}: WorkshopInfo) =>
  <div className="workshop-card">
    <div className="workshop-card-bg" style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover' }} />
      <p className="workshop-card-title">{title}</p>
      <p className="workshop-card-owner"><span style={{ fontWeight: 300 }}>by</span> {ownerName}</p>
  </div>
