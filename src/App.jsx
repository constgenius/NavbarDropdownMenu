import { LogOut, Package, Settings, ShoppingCart } from 'react-feather'
import './App.css'
import Button from './components/Button'
import Dropdown, { DropdownItem } from './components/Dropdown'
import ProfilePic from "./assets/Profile.png"

function App() {

  return (
    <>
      <div className='h-screen bg-gray-50'>
        <nav className='flex items-start justify-end px-4 py-2 border-b'>
          <Dropdown trigger={<Button>Menu</Button>}>
            <DropdownItem>
              <img src={ProfilePic} className='w-12 rounded-full' />
              <div className='py-2'>
                <p className='font-medium'>constGenius</p>
                <a className='text-sm font-medium text-gray-500'>constgenius@gmail.com</a>
              </div>
            </DropdownItem>
            <DropdownItem>
              <ShoppingCart size={20} /> Cart
            </DropdownItem>
            <DropdownItem>
              <Package size={20} /> Orders
            </DropdownItem>
            <DropdownItem>
              <Settings size={20} /> Preferences
            </DropdownItem>
            <DropdownItem>
              <LogOut size={20} /> Logout
            </DropdownItem>
          </Dropdown>

        </nav>
      </div>
    </>
  )
}

export default App
