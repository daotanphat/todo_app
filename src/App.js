import { useStore, actions } from './store';
import './App.css';
import './store/ToDo.css'


function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  }
  return (
    <div className='body'>
      {/* <input
        value={todoInput}
        placeholder='Enter todo'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul> */}

      <div class="row">
        <div class="col-md-12">

          <div class="main-todo-input-wrap">
            <div class="main-todo-input fl-wrap">
              <div class="main-todo-input-item">
                <input type="text" id="todo-list-item"
                  value={todoInput}
                  placeholder="What will you do today?"
                  onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                  }}
                />
              </div>
              <button onClick={handleAdd} class="add-items main-search-button">ADD</button>
            </div>
          </div>

        </div>

      </div>



      <div className="row">
        <div className="col-md-12">

          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
              <ul id="list-items">
                {todos.map((todo, index) => (
                  <li key={index}>
                    <input className="checkbox" type="checkbox" />
                    <span className="todo-text">{todo}</span>
                    <a className="remove text-right"><i className="fa fa-trash" onClick={() => alert('Hello')}></i></a>
                    <hr />
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
