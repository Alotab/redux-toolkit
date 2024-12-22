import { useState } from 'react'

import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
