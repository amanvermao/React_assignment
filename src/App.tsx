
import FirstPAge from "./Components/FirstPage"
import SecondPage from "./Components/SecondPage"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPAge/>}/>
          <Route path="secondpage" element={<SecondPage/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App 
