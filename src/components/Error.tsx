import { ImCancelCircle } from 'react-icons/im'

import classes from './Error.module.css'

function Error() {

    return (
        <div className={classes.error}>
            <ImCancelCircle />
            <h2>Sorry, the user entered doesn't exist</h2>
        </div>
    )
}

export default Error