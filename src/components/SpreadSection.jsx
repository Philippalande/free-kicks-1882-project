import styles from '../styles/SpreadSection.module.css'

function SpreadSection(props) {
    return (
        <section className={styles.spreadgrid}>
           {props.children}
        </section>      
    )
}

export default SpreadSection
    