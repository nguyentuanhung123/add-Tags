import React, { useState, useEffect } from "react";
import axios from "axios";

const ExampleFunctional = () => {

    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Trong trường hợp dependencies rỗng useEffect(() => {})
        //Luôn chạy 1 lần duy nhất khi component được mounted
        //nếu biến trong state thay đổi thì component sẽ được re-render và useEffect sẽ được chạy lại

        //[] chỉ chạy đúng một lần 
        //state trong component có thay đối cũng không chạy vào hàm useEffect này
        //dù cho ta có setCount trong trường hợp [] này thì nó cũng sẽ chỉ chạy duy nhất 1 lần khi màn hình được render

        //Trong trường hợp có dependencies useEffect(() => {},[count])
        //sẽ chạy lần đầu khi màn hình được render và sẽ chỉ chạy nếu biến count thay đổi


        document.title = `You clicked ${count} times`
        console.log('useEffect');

        setTimeout(() => {
            setCount(100);
            setLoading(false);
            loadData();
        }, 3000)

        return () => {
            console.log('useEffect - count - cleanup');
        }
    }, [])

    const loadData = async () => {
        const response = await axios.get("https://fakestoreapi.com/users");
        setUsers(response.data);
    }

    const ascData = () => {
        setLoading(true);
        setTimeout(() => {
            const strAscending = [...users].sort((a, b) =>
                a.name.firstname > b.name.firstname ? 1 : -1,
            );
            setLoading(false);
            setUsers(strAscending);
        }, 3000)
    }

    const desData = () => {
        setLoading(true);
        setTimeout(() => {
            const strDescending = [...users].sort((a, b) =>
                a.name.firstname > b.name.firstname ? -1 : 1,
            );
            setLoading(false);
            setUsers(strDescending);
        }, 3000)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setAction('users')}>Get Users</button>
            <button onClick={() => setAction('comments')}>Get Comments</button>
            <button onClick={desData}>DESCENDING</button>
            <button onClick={ascData}>ASCENDING</button>
            {
                loading === false && users && users.map((user, id) => {
                    return (
                        <div>{user.id} - {user.name.firstname} {user.name.lastname}</div>
                    )
                })
            }
            {
                loading && <div>Loading ...</div>
            }
        </div>
    )
}

export default ExampleFunctional;