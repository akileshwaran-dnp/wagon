import { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import '../styles/profile.css';
import pro from '../pictures/profile.png';
import hom from '../pictures/location.png';
import mob from '../pictures/smartphone.png';
import edit from '../pictures/edit.png';

function Profile () {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get ("name");

    const [user, setUser] = useState ({});
    const [address, setAddress] = useState ([]);
    const [update, setUpdate] = useState (false);
    const getUserDetails = async () => {
        const api = await fetch (`https://62dd4fadccdf9f7ec2c48e96.mockapi.io/api/v1/users/${name}`);
        const data = await api.json();
        // console.log ( data );
        setUser (data);
        setAddress ( data.address );
    };

    useEffect ( () => {
        getUserDetails();
        setUpdate(false);
    }, [update, setUpdate]);

    const updateProfile = async(newProfile) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProfile)
        };
        const api = await fetch ( `https://62dd4fadccdf9f7ec2c48e96.mockapi.io/api/v1/users/${name}`, requestOptions );
        const data = await api.json();
        console.log ( data );
        setUpdate (true);
        alert ("Successful");
    };

    function handleSubmit (event) {
        event.preventDefault();
        var na= document.getElementsByClassName('addr-in');
        const newAddress = [];
        for (let index = 0; index < address.length; index++) {
            const element = na[index].value;
            if ( element !== "" ) {
                newAddress.push ( element );
            }
        }
        const [name, mobile] = document.forms[0];
        const newUserDetails = {
            "id": name.value,
            "pass": user.pass,
            "mobile": mobile.value,
            "address": newAddress
        };
        // console.log ( newUserDetails );
        updateProfile ( newUserDetails );
    }

    function addAddress () {
        var today = new Date();
        const newvalue = "address " + today.getTime();
        setAddress([...address, newvalue]);
        console.log ( address );
    }

    return (
        <div className='profile-body'>
            <h2>My Profile</h2>
            <img src={edit} className="bg-img" />
            <form onSubmit={handleSubmit} className='profile-form'>
                <div className='form-child'>
                    <img src={pro} />
                    <input type="text" name="name" defaultValue={user.id} id="username" />
                </div>
                <div className='form-child'>
                    <img src={mob} />
                    <input type="text" name="mobile" defaultValue={user.mobile} id="mobile" />
                </div>
                <div className='form-child'>
                    <img src={hom} />
                    <div className='addr-child'>
                        {address.map(ad => (
                            <input type="text" name="addr" defaultValue={ad} key={ad} className="addr-in" />
                        )) }
                        <li onClick={addAddress}>
                            <span class="material-symbols-outlined" >add_location_alt</span>
                        </li>
                    </div>

                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
}

export default Profile;