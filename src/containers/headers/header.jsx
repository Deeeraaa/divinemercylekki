import React from 'react'
import people from '../../Assets/assets/people.png'
import divinemercy from '../../Assets/assets/divinemercy1.png'

import "./header.css"

const header = () => {
  return (
    <div className="gpt3__header section__padding id= home">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>
          Welcome To Catholic Church of Divine Mercy
        </h1>
        <p>As parish, we are a community of believers and a spiritual family that is supportive and loving,
          where evryone can grow spiritually,
          put our faith in action, and to use our gifts of time and talent as disciples of Christ...</p>

        <div className='gpt3__header-content__newp'>
            <p>Do you have any enquiries, kindly send us amessage</p>
        </div>
         
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address' /> <br />
          <textarea type="text" placeholder='Enter your enquiry' />
          <button type="button">Submit</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={divinemercy} alt="ai" />
      </div>
    </div>
    
  )
}

export default header