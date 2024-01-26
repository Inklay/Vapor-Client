import { useLocation } from 'react-router-dom'
import Search from '../../../assets/svg/Search'
import Settings from '../../../assets/svg/Settings'

const Store = (): JSX.Element => {
  const tab = useLocation().pathname.split('/')[2] || ''

  function isTabSelected(name: string) : string {
    let className = 'tab'
    tab === name ? className += ' selected' : className += ''
    return className
  }

  return (
    <div>
      <nav>
        <div className='tabs'>
          <a className={isTabSelected('')} href='/store'>Home</a>
          <a className={isTabSelected('browse')} href='/store/browse'>Browse</a>
          <a className={isTabSelected('discover')} href='/store/discover'>Discover</a>
          <a className={isTabSelected('points_shop')} href='/store/points_shop'>Points Shop</a>
          <a className={isTabSelected('curators')} href='/store/curators'>Curators</a>
          <a className={isTabSelected('gift_cards')} href='/store/gift_cards'>Gift Cards</a>
          <a className={isTabSelected('news')} href='/store/news'>News</a>
        </div>
        <div className='reverse'>
          <div className='input'>
            <input type='text' placeholder='Search...'/>
            <Search/>
          </div>
          <div className='tabs'>
            <a className={isTabSelected('wishlist')} href='/store/wishlist'>Wishlist</a>
            <a className={isTabSelected('cart')} href='/store/cart'>Cart</a>
          </div>
          <div className='settings'>
            <Settings/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Store;
