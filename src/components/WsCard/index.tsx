import React from 'react'
import './index.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';

interface WorkshopInfo {
  title?: string,
  ownerName?: string,
  backgroundImage?: string,
  allowDelete?: boolean
}

export default ({ 
  title = "Workshop Name", 
  ownerName = "Matcher Team",
  backgroundImage = "https://picsum.photos/600/300",
  allowDelete = false
}: WorkshopInfo) =>
  <div className="workshop-card">
    <div className="workshop-card-bg" style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover' }} />
    {
      allowDelete ? <div className="delete-icon" ><IconButton color="inherit"><DeleteOutlinedIcon /></IconButton></div> : null
    }
      <p className="workshop-card-title">{title}</p>
      <p className="workshop-card-owner"><span style={{ fontWeight: 300 }}>by</span> {ownerName}</p>
  </div>
