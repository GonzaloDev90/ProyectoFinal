
import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'

const HomeScreen = () => {
  return (
    <div className='contact-container'>
        <div className='contact-list'>
            <ContactList/>
        </div>
        <div className='contact-none'>
            <span>Aun no has seleccionado algun contacto</span>
        </div>
    </div>
  )
}

export default HomeScreen