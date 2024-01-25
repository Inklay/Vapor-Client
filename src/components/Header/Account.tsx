import { FunctionComponent } from 'react'
import DownArrow from '../../assets/svg/DownArrow'

const Account: FunctionComponent = () => {
  return (
    <div className='account'>
      <img className='user-image' width='30' height='30' src='https://avatars.akamai.steamstatic.com/d301ec32d0d12ffebc53d78231899d56a4a51970_full.jpg' alt='user profile'/>
      <div className='user-name'>Inklay</div>
      <div className='user-wallet'>0.58€</div>
      <div className='options'>
        <DownArrow/>
      </div>
    </div>
  )
}

export default Account
