import React from 'react'

const Summary = () => {
  return (
    <div className="bg-white rounded-bl-lg rounded-br-lg shadow-lg py-8 md:px-16 px-8">
      <h3 className="text-4xl text-center pb-8 text-primary">What I do</h3>
      <div className="text-lg uppercase font-bold">
        <p className="pb-2">
          Front-end development with: <br /> React.Js, Javascript and JQuery
        </p>
        <p className="pb-2">
          Back-end development with: <br /> Node.js, Express.js, Next.js and
          Typescript
        </p>
        <p className="pb-2">API's REST and GraphQL</p>
        <p className="pb-2">Databases SQL and noSQL like MySQL and MongoDB</p>
        <p className="">Unit tests with Jest</p>
      </div>
    </div>
  )
}

export default Summary
