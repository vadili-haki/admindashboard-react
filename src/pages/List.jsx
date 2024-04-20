import './List.scss'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Table from '../Components/Table'
function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className='listMain'>
                    <div className='listTiele'>listTiele</div>
                    <Table />
                </div>



            </div>
        </div>
    )
}

export default List
