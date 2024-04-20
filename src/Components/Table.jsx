import "./Table.scss";
import { Link } from "react-router-dom";
function Table() {
    return (
        <div className="table">
            <div id="right_panel">
                <div class="wrap-table">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col" class="sticky-col">
                                    Customer
                                </th>
                                <th scope="col">Status</th>
                                <th scope="col">Course</th>
                                <th scope="col">Enrolled</th>
                                <th scope="col">Progress</th>
                                <th scope="col">Date</th>
                                <th scope="col" class="sticky-col sticky-col-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="sticky-col" scope="row" data-label="Customer">
                                    <div class="user__info">
                                        <label>
                                            <input type="checkbox" />
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </label>

                                        <img
                                            class="user__photo"
                                            src="https://www.shutterstock.com/image-vector/user-profile-avatar-260nw-797312146.jpg"
                                            alt=""
                                        />

                                        <div>


                                            <div class="user__name">Lindsay Walton</div>

                                            <div class="user__email">lindsay@example.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="Status">
                                    <div class="user__badge">Enrolled</div>
                                </td>
                                <td data-label="Course">
                                    <span>HTML</span>
                                </td>
                                <td data-label="Enrolled">Member</td>
                                <td data-label="Progress">
                                    <progress value="32" max="100">
                                        {" "}
                                        32%{" "}
                                    </progress>
                                </td>
                                <td data-label="Date">9/08/2023</td>
                                <td data-label="Actions" class="sticky-col sticky-col-right">
                                    <Link to="/users/test" style={{ textDecoration: "none" }}>

                                        <a href="#" class="user__edit">
                                            Edit
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td class="sticky-col" scope="row" data-label="Customer">
                                    <div class="user__info">
                                        <label>
                                            <input type="checkbox" />
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                        <img
                                            class="user__photo"
                                            src="https://www.shutterstock.com/image-vector/user-profile-avatar-260nw-797312146.jpg"
                                            alt=""
                                        />
                                        <div>
                                            <div class="user__name">Marvin McKinney</div>
                                            <div class="user__email">marvin@example.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="Status">
                                    <div class="user__badge">Enrolled</div>
                                </td>
                                <td data-label="Course">
                                    <span>CSS</span>
                                </td>
                                <td data-label="Enrolled">Member</td>
                                <td data-label="Progress">
                                    <progress value="56" max="100">
                                        {" "}
                                        56%{" "}
                                    </progress>
                                </td>
                                <td data-label="Date">3/13/2023</td>
                                <td data-label="Actions" class="sticky-col sticky-col-right">
                                    <a href="#" class="user__edit">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="sticky-col" scope="row" data-label="Customer">
                                    <div class="user__info">
                                        <label>
                                            <input type="checkbox" />
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                        <img
                                            class="user__photo"
                                            src="https://www.shutterstock.com/image-vector/user-profile-avatar-260nw-797312146.jpg"
                                            alt=""
                                        />
                                        <div>
                                            <div class="user__name">Alma Lawson</div>
                                            <div class="user__email">alma@example.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="Status">
                                    <div class="user__badge user__badge_unpaid">Not paid</div>
                                </td>
                                <td data-label="Course">
                                    <span>Ruby on Rails</span>
                                </td>
                                <td data-label="Enrolled">Member</td>
                                <td data-label="Progress">
                                    <progress value="12" max="100">
                                        {" "}
                                        12%{" "}
                                    </progress>
                                </td>
                                <td data-label="Date">10/02/2023</td>
                                <td data-label="Actions" class="sticky-col sticky-col-right">
                                    <a href="#" class="user__edit">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="sticky-col" scope="row" data-label="Customer">
                                    <div class="user__info">
                                        <label>
                                            <input type="checkbox" />
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    class="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                        <img
                                            class="user__photo"
                                            src="https://www.shutterstock.com/image-vector/user-profile-avatar-260nw-797312146.jpg"
                                            alt=""
                                        />
                                        <div>
                                            <div class="user__name">Floyd Miles</div>
                                            <div class="user__email">floyd@example.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td data-label="Status">
                                    <div class="user__badge">Enrolled</div>
                                </td>
                                <td data-label="Course">
                                    <span>CSS</span>
                                </td>
                                <td data-label="Enrolled">Member</td>
                                <td data-label="Progress">
                                    <progress value="100" max="100">
                                        {" "}
                                        100%{" "}
                                    </progress>
                                </td>
                                <td data-label="Date">6/12/2023</td>
                                <td data-label="Actions" class="sticky-col sticky-col-right">
                                    <a href="#" class="user__edit">
                                        Edit
                                    </a>
                                </td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;
