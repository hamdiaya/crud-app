
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Student from './student';
import CreateStudent from './CreateStudent';
import Update from './Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='/create' element={<CreateStudent/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
