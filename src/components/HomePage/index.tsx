import React from 'react';
import auth from '../Auth/index';

const HomePage = (props: any) => {
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={
             () => {
                 auth.login(()=>{ props.history.push('/dashboard') });
             }
            }>Login</button>
        </div>
    )
}

export default HomePage;