import React from 'react'
import Repo from './Repo'
import UserStats from './UserStats'

const Repos = ({ user, repos }) => {
  return (
    <React.Fragment>
      <div className="mx-auto text-center">
        <h3 className="text-4xl text-center uppercase font-bold text-primary mt-10">
          Tech Contributions
        </h3>
      </div>
      <UserStats user={user} />
      <div className="grid grid-cols-2 gap-4 mb-8">
        {repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />
        })}
      </div>
    </React.Fragment>
  )
}

export default Repos
