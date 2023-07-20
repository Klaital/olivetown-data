import {Item} from "./cooking/Recipe";

export function ItemLink(props: {item: Item}) {
    return (<>
        <div className="sos-item">
            <a href={process.env.PUBLIC_URL + '/item/' + props.item.name}>
                <img alt={props.item.name} src={props.item.icon_file} />
                {props.item.name}
            </a>
        </div>
    </>)
}
