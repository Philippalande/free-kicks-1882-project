import {useState} from 'react'
import './styles/global.css'
import Hero from './components/Hero.jsx'  
import Intro from './components/intro.jsx'
import SpreadCard from './components/SpreadCard.jsx'
import SpreadSection from './components/SpreadSection.jsx'


function App() {
  const [isDark, setIsDark] = useState(true)
  const spreadData = [{era:"1182", title:"The Coinless Six Hundred", verse:"The coinless six hundred charged the gates"}, {era:"2025", title:"The Turnstile Generation", verse:"They're outside Parkhead wi' nae ticket"}]
  return (
  <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Hero />
      <Intro />
      <SpreadSection>
        {spreadData.map((spread) => {
          return (
            <SpreadCard
            era={spread.era}
            title={spread.title}
            verse={spread.verse}
       />    
        )
    })}
       </SpreadSection>
      
    </div>
  )
}

export default App



