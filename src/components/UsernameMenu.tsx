import { CircleUserRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


const UsernameMenu = () =>{
    const { user, logout } = useAuth0();

    const handleLogout = () => {
        // localStorage.removeItem("jwtToken"); // Clear the token
        logout({ 
            logoutParams: {
                returnTo: window.location.origin, // Redirect to the home page after logout
              },
         });
    };
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text gap-2">
                <CircleUserRound className="text-orange-500"/>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link 
                        to="/manage-resturant" 
                        className="font-bold hover:text-orange-40"
                    >
                        Manage Resturant
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link 
                        to="/user-profile" 
                        className="font-bold hover:text-orange-40"
                    >
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button 
                        onClick={handleLogout} 
                        className="flex flex-1 font-bolt bg-orange-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default UsernameMenu;
