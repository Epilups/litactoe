import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";
import TopNavbar from "./TopNavbar.jsx";

export default function DefaultLayout() {

    const {user, token, setUser, setToken} = useStateContext()

    /*
    basically fetches the users data every time this component is rendered
    more useful to do this because user data might update whilst they are still using
    the app/some other stuff. shouldnt be too expensive
    */

    if (token) {
        useEffect(() => {
            axiosClient.get('/user')
                .then(({data}) => {
                    setUser(data)
                })
        }, [])
    }

    return (
        <div className="container">

        </div>
    )
}
