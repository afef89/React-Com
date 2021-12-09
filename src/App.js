
import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import Profilephoto from './Component/Profile/Profilephoto';

function App() {
  return (
    <div className="App">
      <Profilephoto/>
      <FullName/>
      <Adress/>

    </div>
  );
}

export default App;
