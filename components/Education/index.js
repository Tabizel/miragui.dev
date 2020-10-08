import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Graduation Degree',
    subject: 'IT Management',
    institution: 'UNIASSELVI - Centro Universitário Leonardo da Vinci',
  },
]

const Education = () => {
  return (
    <div className="mt-10">
      <h3 className="text-4xl text-center uppercase font-bold text-primary">
        My Education
      </h3>
      {degrees.map((degree, i) => (
        <EducationItem key={'i' + i} degree={degree} />
      ))}
    </div>
  )
}

export default Education
