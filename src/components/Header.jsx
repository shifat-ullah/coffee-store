import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="flex gap-16 text-lg font-bold w-96 m-auto">
                <Link to="/">Home</Link>
                <Link to="/add">AddCoffe</Link>
                <Link to="/update">Update Coffe</Link>
            </ul>
        </div>
    );
};

export default Header;