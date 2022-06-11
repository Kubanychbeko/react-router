import React from 'react'
import Img_Img from './Img_Img'
import Buts from './Buts'

const About = ({ data }) => {
  return (
    <div>
      <Img_Img/>
      <Buts data={data} />
    </div>
  )
}

export default About