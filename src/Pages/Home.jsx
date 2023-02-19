import React from "react";
import Highlights from "../component/Highlights";
import Landing from "../component/Landing";
import Discounted from "../component/Discounted";
import Explore from "../component/Explore";
import Featured from "../component/Featured";
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