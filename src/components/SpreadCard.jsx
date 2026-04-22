import styles from '../styles/SpreadCard.module.css'
import { useEffect, useRef } from 'react'



function SpreadCard(props) {
    const cardRef = useRef(null)
    useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.visible)
        entry.target.classList.remove(styles.hidden)
      }
    })
  })

  if (cardRef.current) {
    observer.observe(cardRef.current)
  }

  return () => observer.disconnect()
}, [])
    return (
     <div ref={cardRef} className={`${styles.spreadcard} ${styles.hidden}`}>
        <p>{props.era}</p>
        <h2>{props.title}</h2>
        <p>{props.verse}</p>    
     </div>
    )
}
export default SpreadCard