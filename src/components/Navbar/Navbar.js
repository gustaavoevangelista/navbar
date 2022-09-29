import {Link} from 'react-router-dom'


export default function Navbar() {

    return (
        <>
            <nav className="topnav">
                <Link to="/" className="logo">
                    Evangelista Consulting
                </Link>
                <ul>
                    <Link to="/about">About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/careers'>Careers</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </>
    )
}
