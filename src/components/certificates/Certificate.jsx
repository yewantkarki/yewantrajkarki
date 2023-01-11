
import React from 'react'

import { Link } from 'react-router-dom'
import FOP from '../../assets/fop.pdf'
import GD from '../../assets/gd.pdf'

const Certificate = () => {
  return (
    <>
    
    <section id='certificate'>
    <Link to = "/"><button className='btn btn-primary'>Home</button></Link>
    <h5>Certificates</h5>
    <h2>My Certificates</h2>

        <div>
        </div>
        <div className="cta">
        <a href={GD} download className='btn'>Graphics Design</a>
        <a href={FOP} download className='btn'>Fundamentals of Programming</a>
        </div>
    </section>
    </>
  )
}

export default Certificate