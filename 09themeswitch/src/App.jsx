import { useState } from "react"
import { ThemeProvider } from "./contexts/Theme"
import { useEffect } from "react"
import Card from './Components/Card'
import ThemeButtom from './Components/ThemeButton'


function App() {
  const [themeMode, setThemeMode]= useState("light")

  const lightTheme= ()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
  document.documentElement.classList.toggle("dark", themeMode === "dark")
}, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeButtom />
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                            <Card />
                        </div>
                    </div>
                </div>  
    </ThemeProvider>
  )
}

export default App
