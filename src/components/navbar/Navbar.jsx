import { motion } from 'framer-motion'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Josue Espinal
        </motion.span>
        <div className='social'>
          <a href='https://www.instagram.com/josue.espinal_/'><img src="/instagram.png" alt="" /></a>
          <a href='https://www.instagram.com/josue.espinal_/'><img src="/instagram.png" alt="" /></a>
          <a href='https://www.instagram.com/josue.espinal_/'><img src="/instagram.png" alt="" /></a>
          <a href='https://www.instagram.com/josue.espinal_/'><img src="/instagram.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar