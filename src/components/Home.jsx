import { Link} from "react-router-dom"

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <h3>I am LIM ZENG KAI</h3>
            <p>Please click the Link below to move to Navigation bar</p>
            <Link to="/navbar">
                HERE
            </Link>
        </div>

     );
}
 
export default Home;