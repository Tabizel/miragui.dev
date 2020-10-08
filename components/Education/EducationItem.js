import React from 'react'

const EducationItem = ({ degree }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-6 md:px-16 px-8 leading-none">
      <h4 className="text-lg uppercase font-bold text-primary">
        {degree.degree}
      </h4>
      <p className="uppercase py-2 text-2xl">{degree.subject}</p>
      <p className="font-bold text-lg">{degree.institution}</p>
    </div>
  )
}

export default EducationItem
