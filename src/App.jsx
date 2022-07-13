import { useState } from 'react';
import './App.css';

function App() {
  const [inputTodos, setInputTodos] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const inputText = (event) => setInputTodos(event.target.value);
  const onClickadd = () => {
    const newIncompleteTodos = [...incompleteTodos, inputTodos]
    setIncompleteTodos(newIncompleteTodos)
    setInputTodos("")
  }

  const onClickComplete = (index) => {
    const newCompletetodos = [...completeTodos, incompleteTodos[index]]
    const deleteIncompleteTodos = [...incompleteTodos]
    deleteIncompleteTodos.splice(index, 1)

    setCompleteTodos(newCompletetodos)
    setIncompleteTodos(deleteIncompleteTodos)

  }

  const onClickDelete = (index) => {
    const deleteTodos = [...incompleteTodos]
    deleteTodos.splice(index, 1)
    setIncompleteTodos(deleteTodos)
  }
  const onClickBack = (index) => {
    const backIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    const deleteCompleteTodos = [...completeTodos]
    deleteCompleteTodos.splice(index, 1)

    setIncompleteTodos(backIncompleteTodos)
    setCompleteTodos(deleteCompleteTodos)


  }



  const onClickDeleteComplete = (index) => {
    const deleteTodos = [...completeTodos]
    deleteTodos.splice(index, 1)
    setCompleteTodos(deleteTodos)
  }

  return (
    <>
      <div className="input-area" >
        <input placeholder='TODOを入力' value={inputTodos} onChange={inputText} />
        <button onClick={onClickadd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
                <button onClick={() => { onClickDeleteComplete(index) }}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App;
