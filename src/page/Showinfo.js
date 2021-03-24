import React from 'react'
import Profile from './Profile';
const Showinfo = (props) => {
    return (
        <>
            <Profile id={props.match.params.id} />
        </>
    )
}

export default Showinfo
