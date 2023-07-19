import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <>
            <h2>Tools for Story of Seasons - Pioneers of Olive Town</h2>
            <p>I've built an ad-free set of data tables for Olive Town</p>
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/flowers"}>Flowers</NavLink>
                    can be used to check which flowers yield which types of honey, and
                    what season they grow in.
                    <span className="todo">
                        TODO: Add notes on how to acquire each one that is not available
                        from Nguyen's store by default.
                    </span>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/cooking"}>Cooking</NavLink>
                    lists all cooking recipes. It can be filtered by Group (Salad/Soup/etc),
                    and by quality level demanded by Lovett in his Gourmet Requests.<br />
                    It also includes a Shopping List feature, where you can select which
                    recipes you are working on, and rendering a list of ingredients that you
                    need to bring into the kitchen with you.
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/crops"}>Crops</NavLink>
                    can be used to look up what season each seed can be planted, or what
                    seeds are useable in a given season.
                    <span className="todo">
                        TODO: Add notes on how to acquire each one that is not available
                        from Nguyen's store by default.
                    </span>
                </li>
            </ul>

        </>
    );

}

export default HomePage;
