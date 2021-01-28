import { useEffect, useState } from 'react'
import styles from '../styles/404.module.scss'
import Link from 'next/link'
import home from '../styles/Home.module.scss'


function createLine(amount) {
    return new Array(amount).fill(0).map(() => Math.round(Math.random() * (0 + 9))).join('');
}
function getBackgroundMatrix() {
    if (typeof window !== 'undefined') {
        const height = Math.round(window.innerHeight / 30);
        const width = Math.round(window.innerWidth / 15);
        const matrix = new Array(height).fill(0).map(() => createLine(width))
        return matrix
    }
    return []
}
export default function Custom404() {
    const matrix = getBackgroundMatrix()
    const [background, setBackground] = useState(matrix)
    useEffect(() => {
        function updateMatrix(){
            setBackground(getBackgroundMatrix())
        }
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', updateMatrix)
            window.addEventListener('wheel', updateMatrix)
            return () =>  {
                window.removeEventListener('resize', updateMatrix)
                window.removeEventListener('wheel', updateMatrix)
            }
        }
    }, [])
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1>404</h1>
                <p>Página não encontrada</p>
                <Link href="/">
                    <a className={home.button}>Voltar ao Início</a>
                </Link>
                <div className={styles.bgText}></div>
            </section>
            <div className={styles.background}>
                {background.map((row, rowIndex) => (
                    <span key={rowIndex}>
                        {row}
                    </span>
                ))}
            </div>
        </main>
    )
}