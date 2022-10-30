import { useEffect, useState } from "react";
import { fetchCities } from "../helpers/amazon";

const DropdownCities = () => {

    const [city, setCities] = useState([]);
    useEffect(() => {
        fetchCities().then((city) =>{
            setCities(city)
        });
    }, []);

    return (
        <select required id ="cities">
            <option value="">Selecione uma Cidade</option>
            {city.map((city) => {
                const {id, name} = city;
                return (<option key ={id} value={id}>{name};</option>
                )
                
            })}
        </select>
    );
};

export default DropdownCities;