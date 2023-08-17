import React from 'react'

export default class Logout extends React.Component
{
    render()
    {
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_contact');
        localStorage.removeItem('user_gender');

        return(
            <div>
                <br/><h2>Logged -Out</h2>
            </div>
        )

    }
}