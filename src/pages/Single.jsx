import "./Single.scss";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import ChartComponent from "../Components/ChartComponent";
function Single() {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://www.shutterstock.com/image-vector/user-profile-avatar-260nw-797312146.jpg"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">david smith</h1>
                                <div className="detailItem">
                                    <span className="itemkey">email:</span>
                                    <span className="itemvalue">david smith@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemkey">phone:</span>
                                    <span className="itemvalue">+1 123 123 123</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemkey">address:</span>
                                    <span className="itemvalue">New york</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ChartComponent />
                    </div>
                </div>
                <div className="bottom">
                    <div class="container">
                        <table class="responsive-table">
                            <caption>Top 10 Grossing Animated Films of All Time</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Film Title</th>
                                    <th scope="col">Released</th>
                                    <th scope="col">Studio</th>
                                    <th scope="col">Worldwide Gross</th>
                                    <th scope="col">Domestic Gross</th>
                                    <th scope="col">International Gross</th>
                                    <th scope="col">Budget</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">The Lion King (2019 remake)</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,657,870,986
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $543,638,043
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $1,114,232,943
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $260,000,000
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Frozen II</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,450,026,933
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $477,373,578
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $972,653,355
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $150,000,000
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Frozen</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,281,019,275
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $400,953,009
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $880,066,266
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $150,000,000
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Incredibles 2</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,243,089,244
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $608,581,744
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $634,507,500
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $200,000,000
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Minions</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,159,444,662
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $336,045,770
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $823,398,892
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $74,000,000
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Toy Story 4</th>
                                    <td data-title="Released">
                                        <img
                                            src="https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td data-title="Studio">
                                        <a href="#" target="_blank" rel="noopener noreferrer"> Disney</a>
                                    </td>
                                    <td data-title="Worldwide Gross" data-type="currency">
                                        $1,073,394,593
                                    </td>
                                    <td data-title="Domestic Gross" data-type="currency">
                                        $434,038,008
                                    </td>
                                    <td data-title="International Gross" data-type="currency">
                                        $639,356,585
                                    </td>
                                    <td data-title="Budget" data-type="currency">
                                        $200,000,000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single;
