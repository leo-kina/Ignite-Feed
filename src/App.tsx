
import './global.css'
import { Header } from './components/Header.tsx'
import { Post } from './components/Post.tsx'
import styles from './App.module.css'
import { SideBar } from './components/SideBar.tsx'
import type { PostProps } from './components/Post.tsx'


function App() {
  const posts: PostProps[] = [
    {key:1, author:{
      avatarUrl: 'https://github.com/leo-kina.png',
      name: 'Leonardo Eiji Kina',
      role: 'Web Dev'
    },
  
    content: [
      {type: 'paragraph', content: ' Fala galeraa'},
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto em React com TypeScript'},
      {type: 'link', content: 'leonardokina.portifa'},  
    ],
    publishAt: new Date('2025-06-09 20:00:00')
},
  {key:2, author:{
      avatarUrl: 'https://github.com/scacchetti07.png',
      name: 'Luís Scacchetti',
      role: 'Dev Back End'
    },
  
    content: [
      {type: 'paragraph', content: ' Ola rede!'},
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu github. É uma criacao de uma IA utilizando python'},
      {type: 'link', content: 'scacchetti07.github'},  
    ],
    publishAt: new Date('2025-04-12 20:00:00')
},
  ]
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main className={styles.postList}>
        {posts.map(post=>{
          return(<Post
          key={post.key}
          author={post.author}
          content={post.content}
          publishAt={post.publishAt}/>)
        })}
        </main>
      </div>
    </div>
  )
}

export default App
