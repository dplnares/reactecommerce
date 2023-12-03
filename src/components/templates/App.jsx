import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

//  Este template será para todas las paginas, evitamos poner el menu en cada página y outlet será todo el otro contenido que tendrá la página
const App = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-16 max-w-200 m-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App
