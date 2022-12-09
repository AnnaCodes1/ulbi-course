import React, { nodeRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1>Посты не найдены!</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            nodeRef={nodeRef}
            timeout={500}
            classNames='post'
          >
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList
