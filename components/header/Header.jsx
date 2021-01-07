import styles from './Header.module.scss';
import Link from 'next/link'

export default () => {
    return (
        <header className={styles.bg}>
            <Link href="/">
                <a>
                    <p>Guilherme Isaías</p>
                    <small>Desenvolvedor Web</small>
                </a>
            </Link>
        </header>
    )
}