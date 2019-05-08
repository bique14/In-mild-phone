import React from 'react'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
    }
  }

  _handleImageChange(e) {
    e.preventDefault()

    const { getPreviewUrl } = this.props

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      }, () => {
        getPreviewUrl(this.state.imagePreviewUrl)
      })
    }
    reader.readAsDataURL(file)
  }


  render() {
    return (
      <div
        style={{ zIndex: '9999' }}
      >
        <input type="file"
          onChange={e => this._handleImageChange(e)}
        />
      </div>
    )
  }
}

export default ImageUpload