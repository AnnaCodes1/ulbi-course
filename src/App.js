import React, { useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Abbb' },
    { id: 2, title: 'Python', body: 'Kttt' },
    { id: 3, title: 'Node.js', body: 'Vsss' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const createPost = newPost => {
    setPosts([...posts, newPost])
  }
  const removePost = post => {
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  const sortPosts = sort => {
    setSelectedSort(sort)
  }
  function getSortedPosts() {
    console.log('Function to get sorted posts')
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }

  const sortedPosts = getSortedPosts()
  return (
    <div className='App'>
      <PostForm create={createPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировать'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      <MyInput
        placeholder='Search'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <PostList
        posts={sortedPosts}
        title='Список номер 1'
        remove={removePost}
      />
    </div>
  )
}

export default App
