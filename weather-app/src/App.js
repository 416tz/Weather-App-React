import "./styles/main.scss";
import './App.css';
import Header from "./components/header";
import Temperature from "./components/temperature";
import Weather from "./components/weather";
import Footer from "./components/footer";
function App() {
    return ( 
        <div >
        <Header />
        <Temperature />
        <Weather />
        <Footer />
        
        </div>

    );
}

export default App;
