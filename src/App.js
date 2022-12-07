import React, { useState, useMemo } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Abbb' },
    { id: 2, title: 'Python', body: 'Kttt' },
    { id: 3, title: 'Node.js', body: 'Vsss' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const { sort, query } = filter

  const createPost = newPost => {
    setPosts([...posts, newPost])
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
      <PostForm create={createPost} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title='Список номер 1'
          remove={removePost}
        />
      ) : (
        <h1>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App
