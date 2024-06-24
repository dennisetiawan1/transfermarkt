import home from '../../assets/home.svg'
import countries from '../../assets/bc-countries.svg'
import competitions from '../../assets/bc-competitions.svg'
import '../../index.css'
import QuickSelectButton from '../elements/QuickSelectButton'

const Menu = () => {
  return (
    <div className='pt-20 md:pt-40 md:bg-white'>
        <div className='hidden md:block border py-2'>
            <ul className='text-black flex gap-5 pl-3'>
            <li className='w-10 cursor-pointer'>
                <a href="">
                    <img src={home} className='bg-gray-200' alt="" />
                </a>
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
