import { useEffect, useState } from "react";
import { fetchCountries, fetchStates } from "../../helpers/amazon";

const DropdownCountries = () => {
    const [countries, setStates] = useState([]);
    useEffect(() => {
        fetchStates().then((countries) =>{
            setStates(countries)
        });
    }, []);

    return (
        <select required id ="country"> 
            <option value="">Selecione um País</option>
            {countries.map((state) => {
                const {code, name} = state;
                return (<option key ={code} value={code}>{name}</option>)
                

            })}
        </select>
        
        
        
        
        
        
        
        
    );
};

export default DropdownCountries;