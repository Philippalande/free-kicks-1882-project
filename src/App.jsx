import {useState} from 'react'
import './styles/global.css'
import Hero from './components/Hero.jsx'  
import Intro from './components/intro.jsx'
import SpreadCard from './components/SpreadCard.jsx'
import SpreadSection from './components/SpreadSection.jsx'


function App() {
  const [isDark, setIsDark] = useState(true)
  return (
  <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Hero />
      <Intro />
      <SpreadSection>
      <SpreadCard
        era="1182"
        title="The Coinless Six Hundred"
        verse="The coinless six hundred charged the gates"
      />  
        <SpreadCard
        era="2025"
        title="The Turnstile Generation"
        verse="They're outside Parkhead wi' nae ticket"
      />
       </SpreadSection>
      
    </div>
  )
}

export default App


