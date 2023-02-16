import React from "react";
import Highlights from "./Highlights";
import Landing from "./Landing";
import Discounted from "./Discounted";
import Explore from "./Explore";
import Featured from "./Featured";
const Home = () => {
    return(
        <div>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </div>
    )
}

export default Home