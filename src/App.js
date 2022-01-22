import Posts from './components/Posts';
import Form from './components/Form';
import { } from "./App.css";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>              
      <div className="App">
        <Form />
        <Posts />
      </div>
    </Provider>
  );
}

//The <Provider> component makes the Redux store available to any nested components 
//that need to access the Redux store. Since any React component in a React Redux app
//can be connected to the store, most applications will render a <Provider> at the 
//top level, with the entire app's component tree inside of it.

export default App;
