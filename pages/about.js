import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
        Hi, I'm Joel! I am a software engineer with a passion for web application development and I am currently
        into Blockchain development, as long as it has a positive impact on people's lives I will continue to do so.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I enjoy drinking coffee, playing videogames,
          reading, and hanging with my dog. If any of these things interest you too,
          I'd love to chat!
        </div>
      </motion.div>
    </Layout>
  )
}
