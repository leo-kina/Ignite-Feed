
import style from './SideBar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar.tsx'

export const SideBar = () => {
  return (
    <div>
    <aside className={style.sidebar}>
    <img className={style.cover} src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <div className={style.profile}>
        <Avatar  src="https://github.com/leo-kina.png"/>
     
        <strong>Leonardo Eiji Kina</strong>
        <span>Web Dev</span>

    </div>
    <footer>
        
        <a href="#">
            <PencilLine size = {20}/>Editar seu Perfil</a>
    </footer>
    </aside>
    </div>
  )
}
