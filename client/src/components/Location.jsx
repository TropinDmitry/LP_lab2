import React, { useState } from 'react'
import UploadFile from './UploadFile'
import CreateFolder from './CreateFolder'
import { FiFolderPlus, FiUpload, FiArrowLeft } from 'react-icons/fi'

const Location = ({ crrntPath, change, addFile }) => {
    const [createF, setCreateF] = useState(false)
    const [uploadF, setUploadF] = useState(false)

    const comeBack = (crrntPath) => {
        const splitPath = crrntPath.split('/')
        splitPath.pop()
        change(splitPath.join('/'))
    }

    return (
        <div className='Location'>
            <button onClick = { () => comeBack(crrntPath) }>
                    <FiArrowLeft className='icons'/>
                </button>
            <h2>current path /{ crrntPath }</h2>
            <div style={{float: 'right'}}>
                <button onClick = { () => { setCreateF(true) } }>
                    <FiFolderPlus className='icons'/>
                </button>
                <button style={{marginLeft: '40px'}} onClick = { () => { setUploadF(true) } }>
                    <FiUpload className='icons'/>
                </button>
            </div>
                <div className = { createF ? 'Modal active' : 'Modal' } onClick = { () => setCreateF(false) }>
                    <CreateFolder 
                                crrntPath = { crrntPath } 
                                addFile = { addFile } 
                                setActive = { setCreateF }
                    />
                </div>
                <div className = { uploadF ? 'Modal active' : 'Modal' } onClick = { () => setUploadF(false) }>
                    <UploadFile 
                            crrntPath = { crrntPath } 
                            addFile = { addFile } 
                            setActive = { setUploadF }
                    />
                </div>
        </div>
    )
}

export default Location