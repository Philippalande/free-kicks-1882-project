import './styles/global.css'
import Hero from './components/Hero.jsx'  
import Intro from './components/intro.jsx'
import SpreadCard from './components/SpreadCard.jsx'


function App() {
  return (
    <div>
     <Hero />
      <Intro />
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
    </div>
  )
}

export default App


