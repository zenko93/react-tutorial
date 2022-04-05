import {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition} from "react-transition-group";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
          <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show d-flex align-items-center justify-content-between`}>
              <div>
                  <strong>Attention</strong>
                  &nbsp;{alert.text}
              </div>
              <button onClick={hide} type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
        </CSSTransition>
    )
}
