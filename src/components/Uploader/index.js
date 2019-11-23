/* We use js on this file because react-firebase-file-uploader doesn't support ts */
import React, { useState, Fragment } from 'react'
import firebase from 'firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.css'
import { Row, Col } from 'antd'
import { firebaseConfig } from '../../const'

firebase.initializeApp(firebaseConfig);

export default ({ onChange }) => {
  const [fnames, setFnames] = useState([])
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleUploadStart = () => setUploading(true)
  const handleUploadError = (error) => {
    console.log(error)
    setUploading(false)
  }
  const handleUploadSuccess = (filename) => {
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(downloadURL => {
        setFnames([...fnames, filename])
        setImages([...images, { img_url: downloadURL, alt_text: '', desc: '' }])
        onChange([...images, { img_url: downloadURL, alt_text: '', desc: '' }])
        setUploading(false)
      })
  }

  return <Fragment>
    <Row style={{ margin: '15px 0' }}>
      <CustomUploadButton
        hidden
        accept="image/*"
        name="image-uploader-multiple"
        randomizeFilename
        storageRef={firebase.storage().ref("images")}
        onUploadStart={handleUploadStart}
        onUploadError={handleUploadError}
        onUploadSuccess={handleUploadSuccess}
        className="upload-btn"
      >UPLOAD IMAGES</CustomUploadButton>
    </Row>
    <Row>
      {
        uploading ? <LinearProgress /> : null
      }
    </Row>
    <Row>
      {
        images.map(image => 
        <Col xs={4}>
          <img src={image.img_url} style={{ width: 100, height: 100 }} alt={image.alt_text || ""} />
        </Col>)
      }
    </Row>
  </Fragment>
}