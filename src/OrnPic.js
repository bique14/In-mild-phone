import React from 'react'
import './OrcPic.css'
import ImgPreview from './ImgPreview'

class OrnPic extends React.Component {

  render() {
    const { imagePreviewUrl } = this.props
    return (
      <div className="orn-block" id="orn" >
        <ImgPreview imagePreviewUrl={imagePreviewUrl} />
      </div>
    )
  }
}

export default OrnPic