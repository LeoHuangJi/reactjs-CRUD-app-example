import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ZoneService from '../services/zoneService';

export const User = () => {

    const dispatch = useDispatch();

    const usersInfo = useSelector((state) => state.usersData);
    const [count, setCount] = useState(0);
    let x = 2; let y = 3;
    function handleClick() {
        setCount(10)
    }

    useEffect(() => {
        console.log('run----')
        ZoneService.loadUsers(dispatch);

    }, [dispatch])

    useEffect(() => {
        console.log('x>y' + y)
    }, [x]);

    const errorContainer = () => {
        return <div>ERROR IN API</div>;
    }
    const showLoader = () => {
        return <div></div>;
    }
    const renderData = (usersInfo) => {


        return usersInfo.error ? errorContainer() :
            <div className="container">
                <h1 onClick={handleClick}>{count}</h1>
                <div className="header"><div>NAME</div><div>EMAIL</div><div>PHONE</div><div>WEBSITE</div></div>
                {usersInfo.usersList.data.map((user, index) =>
                    <div className="row" key={index}><div> {user.id} </div>
                        <div>{user.name}</div>

                    </div>)}
            </div>
    }
    return (
        usersInfo.loading ? showLoader() : renderData(usersInfo)
    )
}

export default User;