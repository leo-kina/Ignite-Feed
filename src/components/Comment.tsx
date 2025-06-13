import { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar.tsx'
interface CommentProps {
    content:string,
    ondeletComment: (comment: string) => void
}
export const Comment = ({content, ondeletComment}:CommentProps) => {
    const handleDeletComment = () =>{
        ondeletComment(content)
        console.log('deletando '+content)

        
    }
    const [likeCount, setLikeCount] = useState(0)
    const handleLikeBtn = () =>{
        setLikeCount((prev) => prev +  1)
    }
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} 
        src="https://github.com/GuiGuerreiroo.png" 
        alt='' 
        />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Guilherme Guerreiro</strong>
                    <time title='9 de Junho ás 18:40'dateTime='2025-06-09'> Cerca de 1h atrás</time>
                </div>
                <button onClick={handleDeletComment} title='Deletar comentario'>
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeBtn}>
                    <ThumbsUp/>  Aplaudir <span>{likeCount}</span>
                </button>
              
            </footer>
        </div>
    </div>
  )
}
