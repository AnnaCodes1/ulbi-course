import React, { useState, useRef } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Node.js', body: 'Description' },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  // const bodyInputRef = useRef() // для неуправляемого компонента

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')

    // console.log(bodyInputRef.current.value) // для неуправляемого компонента
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент*/}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название"
        />

        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Содержание"
        />

        {/* Неуправляемый/неконтролируемый компонент */}
        {/* <MyInput
          ref={bodyInputRef} 
          type="text" 
          placeholder="Описание" /> */}

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список номер 1" />
    </div>
  )
}

export default App
