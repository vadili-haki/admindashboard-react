import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search...." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <Brightness4OutlinedIcon />
                    </div>
                    <div className="item">
                        <NotificationsActiveOutlinedIcon />
                        <div className="notificiotnCounter">2</div>
                    </div>
                    <div className="item">

                        <img src="https://yt3.ggpht.com/zlUkBgHAXRdBCJCtsvrL2P2K7ctIm3zCHEPA9U8o52-ugR4oqS761nHINIHyydJc_17oIkF6iw=s88-c-k-c0x00ffffff-no-rj"
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
