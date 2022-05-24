import './App';
import Fiche from "./App";
import './page.css';
import axios from "axios";
import React, {useEffect, useState} from "react";

const Page  = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost/anuaireReact/index.php?type=fiche")
            .then((res) => setData(res.data));
    },[])

    return(
        <div class="container_page">
            {data.map((fiche)=> <Fiche data={fiche}></Fiche>)}
        </div>
    )
}

export default Page;