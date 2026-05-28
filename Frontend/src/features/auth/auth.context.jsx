import { createContext,useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null) // Initialize user state to null means no user is logged in
    const [loading, setLoading] = useState(true)

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}