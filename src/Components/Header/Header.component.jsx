import './Header.style.css';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='options'>
          <Link className='optionLink' to='/'>
          <i className="fas fa-home"></i>
          </Link>
          <Link className='optionLink' to='/NowPlaying'>
           NOWPLAYING
          </Link>
          <Link className='optionLink' to='/Upcomeing'>
           UPCOMING
          </Link>
          <Link className='optionLink' to='/Latest'>
           LATEST
          </Link>
        </div>
    </div>
  )
}

export default Header
