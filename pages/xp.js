import { useState } from 'react'
import styles from '../styles/Xp.module.scss'

const PROGRAMS = [
    {
        name: 'Curriculum.doc',
        icon: {
            img: '/word-icon.png',
            position: {
                x: 0,
                y: 0
            }
        },
        opened: false,
        minimized: false,
        content: null
    },
]


export default function Xp() {
    const [programs, setPrograms] = useState(PROGRAMS)
    function dragIcon(index, diff) {
        return function (event) {
            const e = event || window.event;
            e.preventDefault()
            programs[index].icon.position.y = e.clientY - diff.y
            programs[index].icon.position.x = e.clientX  - diff.x
            setPrograms([...programs])
        }
    }
    function removeDragListener() {
        if(typeof document !== 'undefined') {
            document.onmousemove = null;
            document.onmousedown = null;
        }
    }
    function iconMouseDown(index) {
        if(typeof document !== 'undefined'){
            return function (event) {
                removeDragListener()
                const e = event || window.event;
                e.preventDefault()
                const initialPosition = { x: event.clientX, y: event.clientY }
                const diff = {
                    x: initialPosition.x - programs[index].icon.position.x,
                    y: initialPosition.y - programs[index].icon.position.y,
                }
                document.onmousemove = dragIcon(index, diff)
                document.onmouseup = removeDragListener
            }
        }
    }
    function toggleProgram(index, state){
        return function(){
            programs[index].opened = state;
            setPrograms([...programs])
        }
    }
    function openProgram(index){
        return toggleProgram(index, true)
    }
    function closeProgram(index){
        return toggleProgram(index, false)
    }
    return (
        <>
            <main className={styles.main}>
                <section className={styles.desktop}>
                    {programs.filter(program => program.opened).map((program, index) => (
                        <div key={`${program.name}-${index}`} style={{ display: program.minimized ? 'none' : 'flex' }} className={styles.window}>
                            <div className={styles.topBar}>
                                <div className={styles.windowTitle}>
                                    <img height={15} width='auto' src={program.icon.img} />
                                    <span>{program.name}</span>
                                </div>
                                <div className={styles.actions}>
                                    <button>_</button>
                                    <button></button>
                                    <button onClick={closeProgram(index)} className={styles.close}>&times;</button>
                                </div>
                            </div>
                            <div className={styles.content}>{program.content}</div>
                        </div>
                    ))}
                    {programs.map((program, index) => (
                        <section
                            key={program.name}
                            onMouseDown={iconMouseDown(index)}
                            onMouseUp={removeDragListener}
                            style={{ top: program.icon.position.y, left: program.icon.position.x }}
                            className={styles.programIcon}
                            onDoubleClick={openProgram(index)}
                        >
                            <img src={program.icon.img} />
                            <span>{program.name}</span>
                        </section>
                    ))}
                </section>
                <section className={styles.taskBar}>
                    <button className={styles.start} type="button">
                        <img height="20px" width="20px" src="/windows_icon.png" />
                        <span>start</span>
                    </button>
                    <section></section>
                </section>
            </main>
        </>
    )
}