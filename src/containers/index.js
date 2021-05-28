import React from 'react';
// import Users from './../components/users'
import Counter from './../components/Counter'
import ZonesList from './../components/Zone'
const Home = () => {


    return (
        <div className="container">Home page
            <Counter />
            <div className="row">
                <h2 className="text-center">Zone</h2>
                <ZonesList />
            </div>

            {/* <Users /> */}

        </div>
    )
}

export default Home;