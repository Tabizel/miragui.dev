import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <p className="text-primary font-bold text-center text-sm my-4 border-t-2 pt-2">
        Made by Miragui Technology with{' '}
        <a target="_blank" href="https://devpleno.com">
          DevPleno
        </a>
        <FaRegCopyright className="inline-block pl-1" />
      </p>
    </div>
  )
}

export default Footer
