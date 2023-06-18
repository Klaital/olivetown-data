import {Flower} from "./Flowers";

interface FlowersListProps {
    flowers: Flower[];
}

function FlowersList({ flowers }: FlowersListProps) {
    return <table>
        <thead>
            <tr>
                <td>Flower</td>
                <td>Season</td>
                <td>Honey Type</td>
                <td>Acquisition</td>
            </tr>
        </thead>
        <tbody>
        {flowers.map((flower) => (
            <tr>
                <td>{flower.name}</td>
                <td>{flower.season}</td>
                <td>{flower.honeyType}</td>
                <td>{flower.howTo}</td>
            </tr>
        ))}
        </tbody>
    </table>
}

export default FlowersList;
