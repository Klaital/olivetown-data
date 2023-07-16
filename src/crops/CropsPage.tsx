import {ChangeEvent, useState} from "react";
import {MOCK_CROPS} from "./MockCrops";

const ALL_SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter']
export default function CropsPage() {
    const [seasons, setSeasons] = useState(ALL_SEASONS);

    const handleSeasonSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSeasons(seasons.concat([e.target.id]));
        } else {
            setSeasons(seasons.filter((s) => s !== e.target.id))
        }
    }
    return (
        <div>
            <h1>Crops List</h1>
            <form>
                <h2>Seasons:</h2>
                {ALL_SEASONS.map((name) => (
                    <label htmlFor={name}>
                        <input
                            type="checkbox"
                            id={name}
                            checked={seasons.includes(name)}
                            onChange={handleSeasonSelect}
                        />
                        {name}
                    </label>
                ))}

            </form>
            <CropsList seasons={seasons} />
        </div>
    )
}

function CropsList(props: {seasons:string[]}) {
    let cropset = MOCK_CROPS.filter(crop => crop.Seasons.some(s => props.seasons.includes(s)))
    return (
        <table>
            <thead>
            <tr>
                <th>Seed</th>
                <th>Seasons</th>
                <th>Has HQ</th>
                <th>Days To Grow</th>
                <th>Last Day To Plant</th>
            </tr>
            </thead>
            <tbody>
            {cropset.map(crop => (
                <tr>
                    <td>{crop.Name}</td>
                    <td>
                        <ul>{crop.Seasons.map((s) => (
                            <li>{s.toString()}</li>
                        ))}</ul>
                    </td>
                    <td>{crop.HasHQ}</td>
                    <td>{crop.Growth?.Time}</td>
                    <td>{crop.Growth?.LastDay}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
