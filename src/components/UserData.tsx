import { ImLocation } from 'react-icons/im'
import { UserProps } from '../types/user'

import classes from './UserData.module.css'

function UserData({avatar_url, login, location, followers, following}: UserProps) {

    return(
        <div className={classes.data}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            { location && (
                <div className={classes.location}>
                    <ImLocation />
                    <span>{location}</span>
                </div>
            ) }
            <div className={classes.stats}>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
            </div>
        </div>
    )
}

export default UserData