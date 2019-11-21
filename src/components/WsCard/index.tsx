import React from 'react'
import './index.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Popconfirm } from 'antd'
import { deleteWorkshop } from '../../api/workshop'
import { Link } from 'react-router-dom'

interface WorkshopInfo {
  id?: string,
  title?: string,
  ownerName?: string,
  backgroundImage?: string,
  allowDelete?: boolean,
  onDeleted?: any
}

const handleDelete = async (id: string, onDeleted: any) => {
  await deleteWorkshop(id)
  onDeleted(id)
}

export default ({
  id = '0',
  title = "Workshop Name",
  ownerName = "Matcher Team",
  backgroundImage = "https://picsum.photos/600/300",
  allowDelete = false,
  onDeleted = (id: string) => { }
}: WorkshopInfo) =>

  <div className="workshop-card">
    <Link to={`/workshop/${id}`}>
      <div className="workshop-card-bg" style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover' }} />
      <p className="workshop-card-title">{title}</p>
      <p className="workshop-card-owner"><span style={{ fontWeight: 300 }}>by</span> {ownerName}</p>
    </Link>
    {
      allowDelete ? <div className="delete-icon" >
        <Popconfirm
          title="Are you sure delete this workshop?"
          onConfirm={() => handleDelete(id, onDeleted)}
          onCancel={() => { }}
          okText="Yes"
          cancelText="No"
        >
          <IconButton color="inherit"><DeleteOutlinedIcon /></IconButton>
        </Popconfirm>
      </div> : null
    }
  </div>

