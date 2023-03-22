import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const AuthRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext)
    const Router = useRouter()
    if (currentUser) {
        return <>{children}</>
    } else {
        Router.push("/login")
        return <></>
    }
}

export default AuthRoute