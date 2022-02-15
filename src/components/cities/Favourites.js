import CityItem from './CityItem';
import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function Favourites({match}) {

    const citiesList = useSelector((state) => state.cities);
    const [cities, setCities] = useState([]);

    useEffect(() => {
       setCities(citiesList.filter(city => city.isFavourite));
    }, []);

    console.log(match, "match");

    return (
        <div>
            {
                !cities.length ? <div>There are no favourite cities yet.</div> : (
                    <>
                        <h1>List of favourite cities</h1>
                        <ul>
                            {cities.map((city, index) => {
                                return <li key={index}>
                                    <Link to={`/favourites/${city.title}`}><CityItem key={index} city={city} /></Link>
                                </li>
                            })}
                        </ul>
                        {/*{cities.map((city, index) => {*/}
                        {/*    return <CityItem key={index} city={city} />;*/}
                        {/*})}*/}
                    </>
                )
            }
        </div>
    );
}

export default Favourites;