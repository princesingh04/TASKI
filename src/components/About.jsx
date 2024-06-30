import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'
const ServiceCard= ({index,title,icon }) =>{
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right","spring", 0.5*index, 0.75 )}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options ={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col
        '
        >
          <img src={icon} alt={title} className='w-16b h-14 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("", "" , 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
"Hello, I'm a 19-year-old enthusiast dedicated to making impactful 
contributions to the global technology landscape. Proficient in languages 
like C, C++, JavaScript, and Python, I excel in web development, h
arnessing the power of HTML5, CSS3, JavaScript, Node.js, React.js, along with tools
 like Bootstrap, jQuery, and SASS. I'm also delving into AI-ML,
  specializing in Supervised Learning, and exploring the fundamentals of Blockchain Technology 
  under Web3. With a solid foundation in Data Structures and Algorithms,
   I've tackled over 550 questions on platforms like GeeksforGeeks and LeetCode. 
   Let's shape the future together!"


    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key ={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,'about');