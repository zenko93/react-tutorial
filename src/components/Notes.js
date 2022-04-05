import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeOut={800}
                >
                    <li className="list-group-item d-flex flex-row align-items-center justify-content-between">
                        <span>{note.title}</span>

                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => onRemove(note.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
