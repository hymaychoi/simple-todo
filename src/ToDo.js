import PropTypes from 'prop-types' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styles from "./ToDo.module.css"

export default function ToDo(props){
    function onClick(e, id){
        const toDoElem = document.getElementById(id)
        if(toDoElem.classList.contains(styles.checked)){
            toDoElem.classList.remove(styles.checked)
        } else{
            toDoElem.classList.add(styles.checked)
            setTimeout(()=>props.removeItem(e, id), 2000)
        }
    }

    return (
        <li id={props.id}>
            <span>{props.text}</span>
            <button className={styles.btn}><FontAwesomeIcon icon={faCheck} onClick={(e)=>onClick(e, props.id)}/></button>
            <button className={styles.btn}><FontAwesomeIcon icon={faTrashCan} onClick = {(e)=>props.removeItem(e, props.id)}/></button>
        </li>
    )
}

ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}