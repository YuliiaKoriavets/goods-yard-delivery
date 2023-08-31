import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link></Link>
            <div>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink to="/calculator">Калькулятор</NavLink>
            </div>
        </header>
    )
}