import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import Router from '../Router'

const CreateFolder = ({ crrntPath, addFile, setActive }) => {
    const [folderName, setName] = useState('')

    const create = async () => {
        let fullPath
        crrntPath ? fullPath = crrntPath + '/' + folderName : fullPath = folderName

        const response = await Router.create(fullPath)
        if (response) {
            addFile({ fileName: folderName, fileSize: '-' })
            setName('')
            setActive(false)
        }
    }

    return (
        <div className = 'ModalContent' onClick = { e => e.stopPropagation() }>
            <div>
                <strong>Enter folder name:</strong>
                <input id = 'FolderNameInput'
                       value = { folderName }
                       onChange = { event => setName(event.target.value) }/>
            </div>
            <button className='okBtn' onClick = { () => create() }>
                <BsCheck2 className='icons'/>
            </button>
        </div>
    )
}

export default CreateFolder