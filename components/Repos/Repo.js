import React from 'react'
import { GoStar } from 'react-icons/go'

const Repo = ({ repo }) => {
  return (
    <div className="rounded-lg bg-white p-4 hover:shadow-lg md:px-16 pl-8">
      <h3 className="font-bold hover:underline">
        <a target="_blank" href={'https://github.com/' + repo.full_name}>
          {repo.full_name}
        </a>
      </h3>
      <p>Language: {repo.language}</p>
      <p className="inline-block pt-1">
        <GoStar className="text-xl" />
      </p>
      <p className="inline-block align-top">: {repo.stargazers_count}</p>
    </div>
  )
}

export default Repo
