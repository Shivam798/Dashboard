import React, { useState } from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import Navbar from "../../component/Navbar/Navbar"
import './newone.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const Newone = ({title,input}) => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
          <div className='bottom'>
            <div className='left'>
              <img src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt='no-pic' />
            </div>
            <div className='right'>
              <form >
                <div className='formInput'>
                  <label htmlFor='file'> Image:<DriveFolderUploadIcon className='icon' /></label>
                  <input type='file' id='file'  onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}></input>
                </div>
                {input.map((item)=>(

                <div className='formInput' key={item.id}>
                  <label>{item.label}</label>
                  <input type={item.type} placeholder={item.placeholder}></input>
                </div>
                ))}
              
                
                <button >Send</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Newone