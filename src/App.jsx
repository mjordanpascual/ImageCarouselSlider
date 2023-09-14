import './App.css'
import ImageSlider from './components/ImageSlider'

function App() {

  const slides = [
    { url: "https://picsum.photos/seed/img1/800/600", title: "Beach" },
    { url: "https://picsum.photos/seed/img2/800/600", title: "Boat" },
    { url: "https://picsum.photos/seed/img3/800/600", title: "City" },
    { url: "https://picsum.photos/seed/img4/800/600", title: "Forest" },
    { url: "https://picsum.photos/seed/img5/800/600", title: "Italy" },
  ];

  const containerStyles = {
    width: '1200px',
    height: '580px',
    margin: '0 auto',
  };

  return (
    <>
      <h1>Hello, Kylj Jordan!</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  )
}

export default App
