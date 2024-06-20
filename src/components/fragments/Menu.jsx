import home from '../../assets/home.svg'
import countries from '../../assets/bc-countries.svg'
import competitions from '../../assets/bc-competitions.svg'
import '../../index.css'
import QuickSelectButton from '../elements/QuickSelectButton'

const Menu = () => {
  return (
    <div className='pt-20 sm:pt-40 sm:bg-white'>
        <div className='hidden sm:block border py-2'>
            <ul className='text-black flex gap-5 pl-3'>
            <li className='w-10'>
                <img src={home} className='bg-gray-200' alt="" />
            </li>
            <QuickSelectButton
                icon={countries}
                text='Indonesia'
            />
            <QuickSelectButton 
                icon={competitions}
                text='Kompetisi'
            />
            </ul>
        </div>
    </div>
  )
}

export default Menu
