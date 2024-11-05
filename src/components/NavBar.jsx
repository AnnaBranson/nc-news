import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to="/articles">Articles</Link>
        </nav>
        </>
    )
}
{/* <Link to='/articles'>ViewArticles</Link>
{/* <Link to='/sellItems'>Sell Items</Link>
<Link to='/profile'>My Profile</Link>
<Link to='/basket'>My Basket</Link>
<Link to='/login'>Login</Link>    */} 