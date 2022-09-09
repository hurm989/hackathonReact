import logo from './logo.svg';
import './App.css';
import AppRouter from './navigation/router';
import { Provider } from "react-redux";
import store from './config/redux/store.js'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
