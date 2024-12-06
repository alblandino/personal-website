import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-128 h-128 mb-8 rounded-full" src="/default.gif" alt="Joel Jaime" title="Yes, it's me!" />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl" alt="Joel Jaime" title="Joel Alexander Jaime Blandino, it's my full name">
            JOEL JAIME
          </h1>
          <h2 className="mx-auto text-1xl tracking-widest text-center sm:text-2xl">
            Web3, Rust, Solidity & Node Developer
          </h2>
          <hr className="w-16 my-8 border-gray-500" />
          <h2 className="text-lg tracking-widest text-center">SOFTWARE ENGINEER</h2>
        </div>
      </motion.div>
    </Layout>
  )
}