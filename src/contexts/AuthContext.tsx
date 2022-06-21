import  { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(undefined as unknown as User)
export const AuthDispatch = createContext(undefined as unknown as React.Dispatch<React.SetStateAction<User>>)

export default function AuthProvider({ children }: { children: React.ReactNode }) { 
    const [user, setUser] = useState({} as User)
    useEffect(() => {
    
      return () => {}
    }, [])
    
    return (
        <AuthContext.Provider value={user}>
            <AuthDispatch.Provider value={setUser}>
                {children}
            </AuthDispatch.Provider>
        </AuthContext.Provider>
    )
}