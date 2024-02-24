import './Styles/styles.css'
import Navbar from './Components/Navbar';
import { InfoComp } from './Components/Info';
import ChoiseCard from './Components/ChoiseCard';
import ChoiseCardtwo from './Components/ChoiseCardtwo';
import Footer from './Components/Footer';
import CardsComponet from './Components/CardsComponet';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='second'>
        <InfoComp />
        <ChoiseCard />
        <ChoiseCardtwo />
        <CardsComponet />
        <Signup />
        <Footer />

      </div>
    </div>
  );
}

export default App;
