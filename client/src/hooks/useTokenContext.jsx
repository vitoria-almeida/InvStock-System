import { useContext } from 'react'
import { AuthContext } from '../contexts/TokenContext'

export const useAuth = () => {
    return useContext(AuthContext)
}