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

  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()} ])
    setPost({title: '', body: ''})
    
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент*/}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
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
