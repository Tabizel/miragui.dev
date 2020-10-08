import React from 'react'
import { RiGitRepositoryCommitsFill, RiUserFollowFill } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'

const UserStats = ({ user }) => {
  return (
    <div className="rounded-lg py-6 leading-none text-center">
      <h4 className="text-lg uppercase font-bold text-primary pb-1">
        GitHub Stats
      </h4>
      <div className="flex pt-2 align-center justify-center">
        <div className="px-2">
          <p className="text-lg flex font-bold">
            <RiGitRepositoryCommitsFill className="flex text-2xl" /> :{' '}
            {user.public_repos}{' '}
          </p>
        </div>
        <div className="px-2">
          <p className="text-lg flex font-bold">
            <GoGist className="flex align-middle text-2xl" /> :{' '}
            {user.public_gists}{' '}
          </p>
        </div>
        <div className="px-2">
          <p className="text-lg flex font-bold">
            <RiUserFollowFill className="flex align-center text-2xl" /> :{' '}
            {user.followers}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserStats
