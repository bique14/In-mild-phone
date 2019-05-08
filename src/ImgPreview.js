import React from 'react'
import './ImgPreview.css'

const ImgPreview = (data) => {
  const { imagePreviewUrl } = data
  const result = imagePreviewUrl ?
    (<img className="preview-img"
      src={imagePreviewUrl}
      alt="preview"
    />) :
    (<code>Select Image</code>)
  return result
}

export default ImgPreview