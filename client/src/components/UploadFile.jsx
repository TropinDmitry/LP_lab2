import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import Router from '../Router'

const UploadFile = ({ crrntPath, addFile, setActive }) => {
    const [file, setFile] = useState({})

    const upload = async () => {
        let formData = new FormData()
        formData.append('crrntPath', crrntPath)
        formData.append('file', file)

        const response = await Router.upload(formData)
        if (response) {
            addFile({fileName: file.name, fileSize: file.size + ' b'})
            document.getElementById('FileNameInput').value = ''
            setFile({})
            setActive(false)
        }
    }

    return (
        <div className='ModalContent' onClick={ e => e.stopPropagation() }>
            <div>
                <strong>choose a file:</strong>
                <input id = 'FileNameInput'
                       type = 'file'
                       onChange = { event => setFile(event.target.files[0]) }/>
            </div>
            <button className='okBtn' onClick={ () => upload() }>
                <BsCheck2 className='icons'/>
            </button>
        </div>
    )
}

export default UploadFile