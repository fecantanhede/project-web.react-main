import React from 'react'
import { FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const FooterLinks = [
  {
  title: "Home",
  link: "/#",
  },
  {
  title: "About",
  link: "/#about",
  },
  {
  title: "Contact",
  link: "/#contact",
  },
  {
  title: "blogs",
  link: "/#blogs",
  },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container ">
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          {/*Company details*/}
          <div className='py-8 px-4'>
            <a href=""
            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
              lorem ipsum doler sit, amet consectetur adipisicing elit. maiores
              alias cum
            </p>
            <p className='text-gray-500 mt-4'>Made with by  the coding journey</p>
            <a href="https://www.youtube.com/channel/UC1h-a1MKEFXRiFlGNLcy7gQ"
            target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm  rounded-full'>
              Visit our Youtube Channel
            </a>
          </div>

          {/*Footer links*/}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3 '>Important Links</h1>
              <ul>
                {
                FooterLinks.map((data, index) => ( 
                    <li key={index}>
                      <a href={data.link}
                      className='text-gray-600
                      dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
                {/*second col links*/}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3 '>Quink Links</h1>
              <ul>
                {
                FooterLinks.map((data, index) => ( 
                    <li key={index}>
                      <a href={data.link}
                      className='text-gray-600
                      dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className='py-8 px-4 col-sapn-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6 "> <FaMobileAlt />
                <p>+99 999999999</p>
              </div>
              {/* Social links */}
              <div className='flex item-center gap-3  mt-6'>
                <a href="">
                  <FaInstagram className='text-3xl
                  hover:text-primary duration-300'/>
                </a>
                <a href="">
                  <FaFacebook className='text-3xl
                  hover:text-primary duration-300'/>
                </a>
                <a href="">
                  <FaLinkedin className='text-3xl
                  hover:text-primary duration-300'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer