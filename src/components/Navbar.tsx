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
            <div className='actions'>

               <Link to='/sign-in/$' className='btn-primary'><LogIn size='16' /> Sign in</Link>
            </div>
            </div>

        </nav>
    )
}
export default Navbar
