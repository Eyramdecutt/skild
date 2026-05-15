import {Link} from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import {Show, UserButton} from "@clerk/tanstack-react-start";

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
                <Show when='signed-in'>
                    <UserButton />
                </Show>
                <Show when='signed-out'>
               <Link to='/sign-in/$' className='btn-primary'>
                   <LogIn size='16' /> Sign in</Link>
                </Show>

            </div>
            </div>

        </nav>
    )
}
export default Navbar
