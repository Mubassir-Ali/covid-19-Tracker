import "./App.css";

import {Covid19} from './Components/Covid19'
import {CovidData} from './Components/CovidData'
import {Manu} from './Components/Manu'
import SpacingGrid from './Components/FullWidthGrid'


function App() {
  return (
    <div className="App">
    <div className='chart'>
 
    <CovidData/>
    <Manu/>
    <div className='container'>
    <SpacingGrid/>

    </div>
    </div>
    


    </div>
    
     
     
      
   
  );
}

export default App;
