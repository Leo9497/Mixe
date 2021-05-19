import React, {useState} from 'react';
import {IconButton, Tooltip, Button} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import axios from 'axios';


const initialValues = {
  archivo: null,
  archivoNombre: '',
  archivoURL: ''
}

const Subir = () => {
    const[archivo, setArchivo] = useState(initialValues);

    const fileSelectHandler = (e) => {
        setArchivo({
            archivo: e.target.files[0],
            archivoNombre: e.target.files[0].name
        })
    }

  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', archivo.archivo, archivo.archivoNombre);
    axios.post('http://127.0.0.1:8000/api/upload', fd, {
        onUploadProgress: progressEvent => {
            console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
        }
    })
  }

  const download = () => {
      axios({
          url: "http://127.0.0.1:8000/api/download",
          method: 'GET',
          responseType: 'blob',
      }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Ëyuujk.apk');
          document.body.appendChild(link);
          link.click();
      })
  }

  return (
    <div className="abs-center">
      {/*  <input 
           id="archivo-input"
           type="file"
           onChange={fileSelectHandler}
        />
        <lavel htmlFor="archivo-input">
            <Tooltip title="Adjuntar un archivo">
                <IconButton color="primary" component="span">
                    <AttachFileIcon fontSize="large" />
                </IconButton>
            </Tooltip>
        </lavel>
        <Button variant="contained" onClick={onSubmit}>
            Aceptar  
        </Button> */}
        
            <IconButton >
            <h4 onClick={download}>Click aquí para decargar App Ëyuujk </h4>
            
                <GetAppIcon  fontSize="large" onClick={download}>
                
                </GetAppIcon>
               
            </IconButton>
            
     
    </div>
  );
}

export default Subir;
