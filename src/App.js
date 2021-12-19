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

export default App;
