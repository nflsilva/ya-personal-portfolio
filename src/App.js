import './App.css';
import NavigationBar from './components/header/NavigationBar';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App bg-dark" data-bs-theme="dark" style={{textAlign: "start"}}>
      <NavigationBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
