import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigStore } from './redux/ConfigStore';
import './App.css';
import Main from './components/MainComponent';

const store = ConfigStore();

 class App extends Component {


  render() {
    return (
      <Provider store = {store} >
      <BrowserRouter>
         <div className="App">
            <Main />
          </div>
      </BrowserRouter>
      </Provider>
      );
  }
 
  

}

export default App;
