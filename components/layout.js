import Link from 'next/link'
import Head from 'next/head'
import { faGithub, faTwitter, faLinkedinIn, faDev } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import dynamic from 'next/dynamic'
const DarkModeToggle = dynamic(() => import('dark-mode-toggle-animation'), { ssr: false })

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (theme == 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Joel Jaime - Personal Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script defer data-domain="alblandino.com" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <div
        style={{ minWidth: '24rem', maxWidth: '37rem' }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <div className="fixed cursor-pointer top-3 right-3">
          <DarkModeToggle
            mode={theme == 'dark' ? 'sun' : 'moon'}
            onClick={toggleDarkMode}
            width="3rem"
            moonColor="#334155"
            sunColor="white"
            animationDuration={1}
          />
        </div>
        <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6">
          <Link href="/">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              HOME
            </button>
          </Link>
          <Link href="/about">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              ABOUT
            </button>
          </Link>
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </motion.div>
        <motion.div layoutId="social-icons" className="flex items-center justify-center">
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://github.com/alblandino"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://twitter.com/alblandino"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://www.linkedin.com/in/alblandino/"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500" title="My blog"
            href="https://blog.alblandino.com"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faPencilAlt} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
