import React from 'react'
import html2canvas from 'html2canvas'
import OrnPic from './OrnPic'
import ImageUpload from './ImageUpload'
import ImgPreview from './ImgPreview'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreviewUrl: '',
    }
  }

  getPreviewUrl(imagePreviewUrl) {
    this.setState({
      imagePreviewUrl
    })
  }

  capture() {
    console.log(1)
    html2canvas(document.querySelector("#orn")).then(canvas => {
      document.body.appendChild(canvas)
    });
  }

  render() {
    const { imagePreviewUrl } = this.state

    return (
      <div className="App" >
        <header className="App-header">
          <OrnPic />
          <p>
            อรอุ๋งกำลังดูอะไร ?
          </p>
          <ImageUpload getPreviewUrl={this.getPreviewUrl.bind(this)} />
          <ImgPreview imagePreviewUrl={imagePreviewUrl} />
          {
            imagePreviewUrl ?
              (
                <button onClick={this.capture.bind(this)}>Save Image</button>
              ) :
              (
                <button disabled>Save Image</button>
              )
          }
        </header>
      </div>
    );
  }
}


export default App;
