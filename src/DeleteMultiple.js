import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteMultiple = () => {
    const [users, setUsers] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:3006/user")
                .then((res) => {
                    res.data && setUsers(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 3000)
    }, [])

    const handleSelectAll = (event) => {
        setIsChecked(event.target.checked);
    };

    // const handleCheckboxChange = (e, id) => {
    //     if (e.target.checked) {
    //         setCheckedItems([...checkedItems, id]);
    //     } else {
    //         setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    //     }
    // };

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     // Create a new list that excludes the checked items
    //     const newList = users.filter((user) => !checkedItems.includes(user.userid));

    //     // Update the state with the new list and reset the checked items
    //     setUsers(newList);
    //     setCheckedItems([]);
    // }

    return (
        <>
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="mt-4 mb-4 fw-bold">
                            Delete Multiple row data in Reacjs
                        </h2>
                        {/* <button className="btn btn-danger mb-3" onClick={(e) => handleDelete(e)}>All Delete</button> */}
                        <button className="btn btn-danger mb-3">All Delete</button>
                        <form className="form w-100">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={(e) => handleSelectAll(e)}
                                            />
                                        </th>
                                        <th>
                                            Sr.No
                                        </th>
                                        <th>
                                            User Name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Address
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users && users.map((user, index) => {
                                            return (
                                                <tr key={user.userid}>
                                                    <th>
                                                        <input
                                                            type="checkbox"
                                                            // onChange={(e) => handleCheckboxChange(e, user.userid)}
                                                            // checked={checkedItems.includes(user.userid)}
                                                            checked={isChecked}
                                                            onChange={() => setIsChecked(!isChecked)}
                                                        />
                                                    </th>
                                                    <td>{index + 1}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.useremail}</td>
                                                    <td>{user.useradress}</td>
                                                    <td>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteMultiple;