import React, { useState, useEffect } from 'react'
import Location from './components/Location'
import Content from './components/Content'
import Router from './Router.js'
import './App.css'

function App() {
    const [crrntPath, setPath] = useState('')
    const [files, setFiles] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const files = await Router.get(crrntPath)
            setFiles(files)
        }
        fetch()
    }, [crrntPath])
    
    const changePath = (newPath) => {
        setPath(newPath)
    }
    const deleteFile = (file) => {
        setFiles(files.filter(ths => ths.fileName !== file.fileName))
    }
    const addFile = (file) => {
        setFiles([...files, file])
    }

  return (
    <div className='main'>
        <Location crrntPath = { crrntPath } 
                  change = { changePath } 
                  addFile = { addFile }
        />
        <Content  files = { files } 
                  crrntPath = { crrntPath } 
                  change = { changePath } 
                  remove = { deleteFile }
        />
    </div>
  )
}

export default App
