import {Link} from "react-router-dom";

const Dock = () => {

    return (
        <footer className='dock'>
                <div className="glassFilter">
                    <Link to={'/games'}>Games</Link>
                </div>
        </footer>
    )
}

export default Dock