type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react'

import classes from './SearchBar.module.css'

import { ImGithub, ImSearch } from 'react-icons/im'

function SearchBar({loadUser}: SearchProps) {

    //States
    const [input, setInput] = useState("")

    //Enter key function
    const handleKeyDown = (e: KeyboardEvent) => {

        if(e.key === "Enter") {
            loadUser(input)
        }
    }

    return(
        <div className={classes.search}>
            <ImGithub />
            <h2>Search for a Github user:</h2>
            <div className={classes.searchbar}>
                <input type="text" placeholder="Type a user name..." onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
                <button onClick={() => loadUser(input)}>
                    <ImSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchBar