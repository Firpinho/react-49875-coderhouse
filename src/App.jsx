import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import './App.css'


export default function App() {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Bienvenido" />
        </>
    )
}