import {Link} from "@tanstack/react-router";
import {LogIn} from "lucide-react";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className='brand'>
                    <div className='mark'>
                        <div className='glyph' />
                    </div>
                </div>
            <Link to='/'>
                <span>skild</span>
            </Link>
            </div>

            <div className='actions'>
                <LogIn size='16' />
               <Link to='/sign-in/$' className='btn-primary'>Sign in</Link>
            </div>
        </nav>
    )
}
export default Navbar
