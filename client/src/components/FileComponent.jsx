import React from 'react'
import Router from '../Router'
import { FiFile, FiDelete, FiDownload } from 'react-icons/fi'

const File = ({ file, crrntPath, remove }) => {
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
    const download = async () => {
        let fullPath
        crrntPath ?
            fullPath = crrntPath + '/' + file.fileName :
            fullPath = file.fileName

        const response = await Router.download(fullPath)

        const downloadUrl = window.URL.createObjectURL(new Blob([response]))
        const link = document.createElement('a')
        link.href = downloadUrl
        link.setAttribute('download', file.fileName)
        document.body.appendChild(link)
        link.click()
    }

    return (
        <div className='content_row'>
            <div className='item'>
                <div>
                    <FiFile className='icons'/>
                </div>
                <div>
                    <strong>{ file.fileName }</strong>
                    <div>{ file.fileSize }</div>
                </div>
            </div>
            <div className='btns'>
                <button onClick = { () => { download() } }>
                    <FiDownload className='icons'/>
                </button>
                <button onClick = { (event) => handleDelete(event) }>
                    <FiDelete className='icons'/>
                </button>
            </div>
        </div>
    )
}

export default File