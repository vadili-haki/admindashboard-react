import "./Widget.scss"
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
function Widget({ type }) {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;


    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className="icon"
                    style={{
                        background: 'rgb(255,205,206)',
                        color: 'rgb(190,81,93)',
                    }}
                />,
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlinedIcon className="icon"
                    style={{
                        background: '#B4C0DB',
                        color: '#054ef3',
                    }}
                />,
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS ",
                isMoney: true,
                link: "See all erarnings",
                icon: <MonetizationOnOutlinedIcon className="icon"
                    style={{
                        background: ' #9fdfb8',
                        color: ' #047b30',
                    }}
                />,
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See all balance",
                icon: <AccountBalanceOutlinedIcon className="icon"
                    style={{
                        color: "rgb(215 50 230)",
                        background: "rgb(219 150 213)",
                    }}
                />,
            }
            break;

        default:
            break;
    }
    return (
        <div className="Widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ShowChartOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
