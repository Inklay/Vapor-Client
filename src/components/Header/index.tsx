import { FunctionComponent } from 'react'
import steam_logo from '../../assets/steam_logo.png'

const Card: FunctionComponent = () => {
  return (
    <header>
      <div className='app'>
        <div className='client navigation_arrow'>
          <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.71 15.88L10.83 12L14.71 8.11998C15.1 7.72998 15.1 7.09998 14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z'/>
          </svg>
          <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9.29002 8.12002L13.17 12L9.29002 15.88C8.90002 16.27 8.90002 16.9 9.29002 17.29C9.68002 17.68 10.31 17.68 10.7 17.29L15.29 12.7C15.68 12.31 15.68 11.68 15.29 11.29L10.7 6.70002C10.31 6.31002 9.68002 6.31002 9.29002 6.70002C8.91002 7.09002 8.90002 7.73002 9.29002 8.12002Z'/>
          </svg>
        </div>
        <div className='nav'>
          <img src={steam_logo} alt='Steam logo'/>
          <a href='/store'>STORE</a>
          <a href='/community'>COMMUNITY</a>
          <a href='/profile'>PROFILE</a>
          <a className='client' href='/library'>LIBRARY</a>
          <a className='client' href='/downloads'>DOWNLOADS</a>
        </div>
      </div>
    </header>
  )
}

export default Card;