import {ChangeEvent, useState} from "react";
import {MOCK_CROPS} from "./MockCrops";
import './table.css'
const ALL_SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter']
const ALL_CROP_TYPES = ['Field', 'Flower', 'Tree']
export default function CropsPage() {
    const [seasons, setSeasons] = useState(ALL_SEASONS);
    const [cropTypes, setCropTypes ] = useState(ALL_CROP_TYPES);

    const handleSeasonSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSeasons(seasons.concat([e.target.id]));
        } else {
            setSeasons(seasons.filter((s) => s !== e.target.id))
        }
    }

    const handleCropTypeSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setCropTypes(cropTypes.concat([e.target.id]));
        } else {
            setCropTypes(cropTypes.filter((s) => s !== e.target.id))
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
                <h2>Crop Types</h2>
                {ALL_CROP_TYPES.map(name => (
                    <label htmlFor={name}>
                        <input
                            type="checkbox"
                            id={name}
                            checked={cropTypes.includes(name)}
                            onChange={handleCropTypeSelect}
                        />
                        {name}
                    </label>
                ))}
            </form>
            <CropsList
                seasons={seasons}
                cropTypes={cropTypes}
            />
        </div>
    )
}

function CropsList(props: {seasons:string[], cropTypes:string[]}) {
    let cropSet = MOCK_CROPS.filter(crop => crop.Seasons.some(s => props.seasons.includes(s)))
    cropSet = cropSet.filter(crop => props.cropTypes.includes(crop.Type.toString()))
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
            {cropSet.map(crop => (
                <tr>
                    <td data-label="Seed">{crop.Name}</td>
                    <td data-label="Seasons">
                        <ul>{crop.Seasons.map((s) => (
                            <li>{s.toString()}</li>
                        ))}</ul>
                    </td>
                    <td data-label="Has HQ">{crop.HasHQ}</td>
                    <td data-label="Days To Grow">{crop.Growth?.Time}</td>
                    <td>{crop.Growth?.LastDay}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
