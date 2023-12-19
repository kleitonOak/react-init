import './style.css'

const menuItem = ['Search', 'Release', 'Soon'];  
function Menu(){
    return (
        <ul className='options'>
            {
            menuItem.map((item) => (
                <li className='option' key={item}>{item}</li>
            ))
            }
        </ul>
  )
}

export default Menu;