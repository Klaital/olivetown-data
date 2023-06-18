import {MOCK_FLOWERS} from "./MockFlowers";
import FlowersList from "./FlowersList";

function FlowersPage() {
    return (
        <div>
            <h1>Flowers List</h1>
            <FlowersList flowers={MOCK_FLOWERS} />
        </div>
    )
}

export default FlowersPage;