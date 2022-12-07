import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировать'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      <MyInput
        placeholder='Search'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  )
}

export default PostFilter
