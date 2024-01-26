import { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import steam_logo from '../../../assets/steam_logo.png'
import LeftArrow from '../../../assets/svg/LeftArrow'
import RightArrow from '../../../assets/svg/RightArrow'
import Friends from './Friends'
import Notification from './Notification'
import Account from './Account'
import DownArrow from '../../../assets/svg/DownArrow'
import { getClientClassName, isClient } from '../../../utils/client'
import Minimize from '../../../assets/svg/Minimize'
import Maximize from '../../../assets/svg/Maximize'
import Close from '../../../assets/svg/Close'

const Header: FunctionComponent = () => {
  const tab = useLocation().pathname.split('/')[1]

  function isTabSelected(name: string, isClient: boolean) : string {
    let className = ''
    isClient ? className = 'client' : className = ''
    tab === name ? className += ' tab-selected' : className += ''
    return className
  }

  return (
    <header>
      <div className={getClientClassName('navigation_arrow')}>
        <RightArrow/>
        <LeftArrow/>
      </div>
      <div className='nav'>
        <img src={steam_logo} alt='Steam logo'/>
        <a href='/store' className={isTabSelected('store', false)}>STORE</a>
        <a href='/community' className={isTabSelected('community', false)}>COMMUNITY</a>
        <a href='/profile' className={isTabSelected('profile', false)}>INKLAY</a>
        <a href='/library' className={getClientClassName(isTabSelected('library', true))}>LIBRARY</a>
        <a href='/downloads' className={getClientClassName(isTabSelected('downloads', true))}>DOWNLOADS</a>
        <div className='action'>
          <div className='user'>
            <Friends/>
            <Notification/>
            <Account/>
          </div>
          <div className='application'>
            <div>Help</div>
            <div>View <DownArrow/></div>
            <div onClick={() => {window.ipcRenderer.send('minimizeApp')}} id='minimize' className={getClientClassName('window')}>
              <Minimize/>
            </div>
            <div onClick={() => {window.ipcRenderer.send('maximizeApp')}} id='maximize' className={getClientClassName('window')}><Maximize/></div>
            <div onClick={() => {window.ipcRenderer.send('closeApp')}} id='close' className={getClientClassName('window')}><Close/></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
