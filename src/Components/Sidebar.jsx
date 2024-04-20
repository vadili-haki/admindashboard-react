import "./Sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

function sidebar() {
    return (
        <div className='sidebar'>
            <div className="top">

                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">CodeDiceadmin</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <DashboardOutlinedIcon className="icon" />
                            <span>Dashbord</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>

                        <li>
                            <PeopleAltOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <li>
                        <ArchiveOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <DeliveryDiningOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <LoginOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default sidebar
