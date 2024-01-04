import './NewPost.css'
import axiosInstance from '../../axios/config'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()
    
    const post = { title, body, userId: 1 }

    await axiosInstance.post("/posts", {
      body: post
    })

    navigate("/")
  }
  return (
    <div className='newPost'>
      <h2>Inserir novo Post:</h2>

      <form onSubmit={(e) => createPost(e)}>
        <div className="form_control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name='title'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Digite o título' />
        </div>

        <div className="form_control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
            placeholder='Digite o conteúdo'>
          </textarea>
        </div>

        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost