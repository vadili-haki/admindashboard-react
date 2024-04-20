import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
function Featured() {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="progressbarcontainer">
                    <svg
                        class="progressbar"
                        width="180"
                        height="180"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle class="progressbar__path" cx="90" cy="90" r="65"></circle>
                        <circle class="progressbar__fill" cx="90" cy="90" r="65"></circle>
                        <g>
                            <text class="progressbar__title" x="50%" y="50%">
                                70%
                            </text>
                        </g>
                    </svg>
                </div>
                <p className="title">Totale sales made today</p>
                <p className="amount">$450</p>
                <p className="desc">
                    previous transactions processing. last payments may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <InsertChartOutlinedTwoToneIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">last week</div>
                        <div className="itemResult positive ">
                            <InsertChartOutlinedTwoToneIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">last month</div>
                        <div className="itemResult  negative">
                            <InsertChartOutlinedTwoToneIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
