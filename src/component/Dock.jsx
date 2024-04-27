import {Link} from "react-router-dom";

const Dock = () => {

    return (
        <footer className='dock'>
                <nav className="glassFilter">
                    <Link to={'/games'}><img src={'../../public/assets/svg/gameIcon.svg'} alt={'gameIcon'} className={'dockIcon'}/></Link>
                </nav>
        </footer>
    )
}

export default Dock