import styles from './Header.module.scss';

export default () => {
    return (
        <header className={styles.bg}>
            <a href="/">
                <p>Guilherme Isaías</p>
                <small>Desenvolvedor Web</small>
            </a>
        </header>
    )
}