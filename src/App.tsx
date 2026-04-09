import { useTheme } from "./hooks/useTheme";


function App() {
  const {setTheme}=useTheme();
  
  return (
    <>
     <div className="bg-background  h-40 w-50">
      <h1 className="text-primary">My portfolio</h1>
     </div>
     <button 
      onClick={()=>setTheme("theme-purple")}
      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
    >
     purple
    </button>
     <button 
      onClick={()=>setTheme("theme-orange")}
      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
    >
     orange
    </button>
    <button 
      onClick={()=>setTheme("theme-default")}
      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
    >
     default
    </button>
    </>
  )
}

export default App
