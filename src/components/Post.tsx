
import styles from './Post.module.css'
import {Comment} from './Comment.tsx'
import { Avatar } from './Avatar.tsx'
import type { FormEvent, InvalidEvent } from 'react'
import { useState } from 'react'
  interface Author{
    name: string,
    role:string,
    avatarUrl:string
  }
  interface Content{
    type: 'paragraph' | 'link';
    content: string;

  }
  export interface PostProps{
    key: number;     
    author: Author,
    publishAt: Date,
    content: Content[]
  }
export const Post = ({author, publishAt, content}:PostProps) => {
    const publisheDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
   
  }).format(publishAt)
  const handleCreateNewComment = (e:FormEvent) =>{
    e.preventDefault()
    setNewCommentText('')

    setComments([... comments,newCommentText  ])
  }

  function handleNewCommentInvalid(e:InvalidEvent<HTMLTextAreaElement>){
    e.target.setCustomValidity('Esse campo eh obriatorio')
    setNewCommentText(e.target.value)
  }
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState(['Parabens, otimo post','Amei, parabens!'])

  const deletComment = (commentToDelete: string) =>{
    const commentWithoutDeletedOne = comments.filter(comment =>{
        return comment != commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }

  const disabledComment = newCommentText.length == 0
  return (
    <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='9 de Junho ás 18:40'dateTime='2025-06-09'>{publisheDateFormatted}</time>
            </header>
            <div className={styles.content}>
               {content.map(line =>{
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }
                else if(line.type == 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
               })}
            </div>
            <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea required onInvalid={handleNewCommentInvalid} value={newCommentText} onChange={(e)=> setNewCommentText(e.target.value)} name='comment' placeholder='Deixe seu comentario'>
                </textarea>
                <footer>
                   <button type='submit' disabled={disabledComment}>Publicar</button></footer>
            </form>
            <div className={styles.commentList}>
               {comments.map(comment =>{
                return <Comment key={comment}
                ondeletComment={deletComment}
                content={comment}/>
               })}
            </div>
        </article>
        
    </div>
  )
}
