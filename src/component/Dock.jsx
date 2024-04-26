import {Link} from "react-router-dom";

const Dock = () => {

    return (
        <footer className='dock'>
                <div className="glassFilter">
                    <Link to={'/games'}><img src={'../../public/assets/svg/gameIcon.svg'} alt={'gameIcon'} className={'dockIcon'}/></Link>
                </div>
        </footer>
    )
}

export default Dock