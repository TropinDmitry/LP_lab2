import React from 'react'
import File from './FileComponent'
import Folder from './FolderComponent'

const Content = ({ files, crrntPath, change, remove }) => {
    return (
        <div className='Content'>
            {files.map(file => file.fileSize !== '-'
                ? <File 
                        file = { file } 
                        crrntPath = { crrntPath }
                        remove = { remove }
                    />
                : <Folder 
                        file = { file } 
                        crrntPath = { crrntPath } 
                        change = { change } 
                        remove = { remove }
                    />
            )}
        </div>
    )
}

export default Content