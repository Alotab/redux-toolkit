
import React, { useState } from 'react'
import { postAdded } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const [userId, setUserId ] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <form action="">
            <label htmlFor="postTitle">Post Title:</label>
            <input 
            type="text" 
            id="postTitle"
            name={title}
            onChange={onTitleChanged}
            />

            <label htmlFor="postContent">Author</label>
            <select name="" id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                {userOptions}
            </select>

            <label htmlFor="postContent">Content</label>
            <textarea 
            name="postContent" 
            id="postContent" 
            value={content}
            onChange={onContentChanged}
            />
            <button 
            type='button' 
            onClick={onSavePostClicked}
            disabled={!canSave}
            >
                Save Post
            </button>


        </form>
    </section>
  )
}

export default AddPostForm