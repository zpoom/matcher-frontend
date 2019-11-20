/* We use js on this file because react-firebase-file-uploader doesn't support ts */
import React, { useState, Fragment } from 'react'
import firebase from 'firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.css'
import { Row, Col } from 'antd'

const config = {
  apiKey: "AIzaSyCDGeYkkWBkaIeEIj2j9Di1-QIco2nNBX8",
  authDomain: "matcher-api.firebaseapp.com",
  storageBucket: "matcher-api.appspot.com"
};
firebase.initializeApp(config);

export default ({ onChange }) => {
  const [fnames, setFnames] = useState([])
  const [urls, setUrls] = useState([])
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
        setUrls([...urls, downloadURL])
        onChange([...urls, downloadURL])
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
        urls.map(url => 
        <Col xs={4}>
          <img src={url} style={{ width: 100, height: 100 }} alt="" />
        </Col>)
      }
    </Row>
  </Fragment>
}