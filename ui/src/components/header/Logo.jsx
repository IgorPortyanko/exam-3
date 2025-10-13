import { Link } from 'react-router'

const Logo = () => {

  return (
    <div className="w-18 md:w-30 h-18 md:h-30">
      <Link to='/'>
        <img src="./src/assets/img/logo/logo3.jpeg" className="rounded-3xl md:rounded-4xl" alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo