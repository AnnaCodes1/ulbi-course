import React, { useState, useMemo } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyModal from './components/UI/MyModal/MyModal'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Abbb' },
    { id: 2, title: 'Python', body: 'Kttt' },
    { id: 3, title: 'Node.js', body: 'Vsss' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const { sort, query } = filter

  const [modal, setModal] = useState(false)

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
  }, [query, sortedPosts])

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Create user</MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        posts={sortedAndSearchedPosts}
        title='Список номер 1'
        remove={removePost}
      />
    </div>
  )
}

export default App
