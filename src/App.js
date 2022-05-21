import "./App.scss";
import TodoList from "./Pages/TodoList";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
