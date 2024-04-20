

import Chart from '../Components/Chart'
import Featured from '../Components/Featured'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Table from '../Components/Table'
import Widget from '../Components/Widget'

import './Home.scss'

const Home = () => {
    return (
        <div className='home' >
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTiele">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home
