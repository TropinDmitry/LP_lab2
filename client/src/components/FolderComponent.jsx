import React from 'react'
import Router from '../Router'
import { FiDelete, FiFolder } from 'react-icons/fi'

const Folder = ({ file, crrntPath, change, remove }) => {

    const openFolder = (localPath) => {
        let newPath
        localPath ? newPath = localPath + '/' + file.fileName :
            newPath = file.fileName
        change(newPath)
    }
    const handleDelete = async (event) => {
        try {
            event.stopPropagation()
            let fullPath
            crrntPath ? fullPath = crrntPath + '/' + file.fileName :
                fullPath = file.fileName

            const res = await Router.delete(fullPath)
            if(res)
                remove(file)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='content_row' onClick = { () => openFolder(crrntPath) }>
            <div className='item'>
                <div>
                    <FiFolder className='icons'/>
                </div>
                <div>
                    <strong>{ file.fileName }</strong>
                </div>
            </div>
            <div className='btns'>
                <button onClick = { (event) => handleDelete(event) }>
                    <FiDelete className='icons'/>
                </button>
            </div>
        </div>
    )
}

export default Folder