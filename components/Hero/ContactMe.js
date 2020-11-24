import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactMe = () => {
  return (
    <div className="border border-primary rounded-tl-lg rounded-tr-lg pb-4 relative mt-8">
      <div className="lg:pl-16 pl-8">
        <h3 className="text-2xl font-bold uppercase -mt-5 text-white bg-primary rounded-lg text-center absolute py-2 px-4">
          Contact me
        </h3>
      </div>
      <div className="inline-block w-full mx-auto">
        <ul className="pt-12 pb-4 text-center">
          <li className="text-6xl w-1/3 inline-block">
            <a
              className=""
              href="https://www.linkedin.com/in/gabriel-mirand/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-6xl inline-block w-1/3">
            <a href="https://github.com/Tabizel" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="text-6xl inline-block w-1/3">
            <a href="mailto:gabriel.miranda@outlook.com.br">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactMe
