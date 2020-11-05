import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBody from "./HomeBody/HomeBody";


export default class HomePage extends React.Component 
{
    render() {
        return (
            <>
                <HomeBanner />
                <HomeBody />
            </>
        )
    }
}