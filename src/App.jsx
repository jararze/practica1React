import './App.css'


import Home from './screens/Home'
import Counter from './components/Counter/Counter.jsx';
import Product from './screens/Product'

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";

function App() {
  return (
    <>
      <Navigator />
      <Router />
    </>
  )
}

export default App;
