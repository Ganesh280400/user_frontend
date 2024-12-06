import { useEffect, useState } from "react"
import { userList } from "../userservice/UserList.js"
function UserHome() {
    const [userData, setUserData] = useState([])
    useEffect(
        () => {
            userList().then((response) => {
                setUserData(response.data);
            }
            ).catch(error => {
                console.error(error)
            })
        }, [])


    return (<div className="container">
    <h1>User Details</h1>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th>id</th>
                <th>mail</th>
                <th>userName</th>

                </tr>
            </thead>
            <tbody>
                {
                    userData.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.mail}</td>
                            <td>{user.userName}</td>

                        </tr>)

                }

            </tbody>


        </table>
        <button>Add User</button>

    </div>
        
    )
}
export default UserHome