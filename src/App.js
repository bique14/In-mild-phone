import React from 'react'
import html2canvas from 'html2canvas'
import OrnPic from './OrnPic'
import ImageUpload from './ImageUpload'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreviewUrl: '',
      url: '',
    }
  }

  getPreviewUrl(imagePreviewUrl) {
    this.setState({
      imagePreviewUrl
    })
    this.setUrl()
  }

  setUrl() {
    const ornPic = document.querySelector("#orn")
    // const app = document.querySelector("#image-box")
    html2canvas(document.querySelector("#orn")).then(canvas => {
      canvas.setAttribute('id', 'orn')
      // app.appendChild(canvas)
      // document.body.appendChild(canvas)
      ornPic.parentNode.replaceChild(canvas, ornPic)
      const download = document.querySelector("#download")
      const cv = document.querySelector("canvas")
      if (cv !== null) {
        const url = cv.toDataURL("image/jpg")
        if (url !== null) {
          console.log(url)
          download.href = url
        }
      }
    })
  }

  refresh() {
    window.location.reload()
  }

  render() {
    const { imagePreviewUrl } = this.state

    return (
      <div className="App" >
        <header className="App-header" id="app">
          <OrnPic imagePreviewUrl={imagePreviewUrl} />
          <p>
            อรอุ๋งกำลังดูอะไร ?
          </p>
          <ImageUpload getPreviewUrl={this.getPreviewUrl.bind(this)} />
          {
            imagePreviewUrl ?
              (
                <a id="download"
                  href='/example.txt'
                  onClick={this.refresh.bind(this)}
                  download="orn"
                >
                  Save Image
                </a>
              ) : null
          }
          <div id="image-box">

          </div>
        </header>
      </div>
    );
  }
}


export default App;
