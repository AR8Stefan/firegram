import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Uploadform = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Setting allowed file types.
  const types = ['image/png', 'image/jpeg', 'image/jpg']

  const uploadHandler = (e) => {
    let selected = e.target.files[0];
    //Only "Selected" files are seen and uploaded. Nothing hapens when cancelled.
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please upload a valid image type. (PNG, JPEG, JPG)');
    }
  }

  return (
    <form>
      <label>
      <input type="file" onChange={uploadHandler}/>
      <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{error}</div> }
        { file && <div>{file.name}</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default Uploadform;