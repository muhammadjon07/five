/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Man_section from './components/Man_section'
import Women_section from './components/Women_section'
import Kid_section from './components/Kid_section'
import Explore from './components/Explore'
import Media from './components/Media'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Man_section/>
      <Women_section/>
      <Kid_section/>
      <Explore/>
      <Media/>
    </div>
  );
}

export default App;
