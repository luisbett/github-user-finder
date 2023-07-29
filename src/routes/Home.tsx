import { useState } from 'react'

import classes from './Home.module.css'

import { UserProps } from '../types/user'

import SearchBar from '../components/SearchBar'
import UserData from '../components/UserData'
import Error from '../components/Error'

function Home() {

    //States
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    //API request
    const loadUser = async (userName:string) => {

        //Start variable as default content
        setUser(null)
        setError(false)

        const res = await fetch(`https://api.github.com/users/${userName}`)

        if(res.status === 404) {

            setError(true)

        } else {

            const data = await res.json()

            const { avatar_url, login, location, followers, following } = data

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            }

            setUser(userData)

        }
    }

    return(
        <div className={classes.home}>
            <SearchBar loadUser={loadUser} />
            { user && <UserData {...user} /> }
            { error && <Error /> }
        </div>
    )
}

export default Home