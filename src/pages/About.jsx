import {motion} from 'framer-motion';
import Member from '../components/Member';

import React from 'react'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{opacity:0}}
    >
        <Member/>
    </motion.div>
  )
}

export default About;