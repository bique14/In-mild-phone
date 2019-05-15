import React from 'react'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      is: false,
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
        document.getElementById('uploadfile').remove()
      })
    }
    reader.readAsDataURL(file)
  }


  render() {
    const { is } = this.state
    return (
      <div
        style={{ zIndex: '9999' }}
      >
        <input type="file"
          id="uploadfile"
          onChange={e => this._handleImageChange(e)}
          disabled={is}
        />
      </div>
    )
  }
}

export default ImageUpload