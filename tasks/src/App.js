import './App.css';
import { BrowserRouter, Routes , NavLink, Route } from 'react-router-dom';
import { TasksList } from './components/tasksList'
import { NewTask } from './components/newTask'

import {createStore} from 'redux';
import { taskReducer } from './redusers/task.reducer';
import { Provider } from 'react-redux';

function App() {
  const store = createStore(taskReducer);

  return (
    <BrowserRouter>

      <Provider store={store}>
        <div className="App">
          <nav>
            <NavLink to="/" exact>Tasks</NavLink>
            <NavLink to="/new" exact>New</NavLink>
            {/* <NavLink to="/edit/1" exact>Edit</NavLink> */}
          </nav>

          <Routes>
            <Route path="/" exact  element={<TasksList></TasksList>}></Route>
            <Route path="/new" exact  element={<NewTask></NewTask>}></Route>
            {/* <Route path="/edit/:id"  element={<Editor person={new Person()} onSubmit={this.onPersonAdd.bind(this)}
                                              onEditorClose={this.onNewPersonClose.bind(this)}>Add new Person</Editor>}></Route> */}
          </Routes>
        </div>
      </ Provider>

    </ BrowserRouter>
  );
}

export default App;
