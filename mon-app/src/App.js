import logo from './logo.svg';
import './App.css';
import './fiche.css';
import avatarHomme from './homme_avatar.png'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Fiche = (props) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost/anuaireReact/index.php?type=fiche")
            .then((res) => setData(res.data));
    },[])


  return(
      <div class="container">
        <div class="container_avatar">
            <img src={avatarHomme} alt=""/>
        </div>
        <div class="container_name">
          <h3>{props.data.nom} {props.data.prenom}</h3>

        </div>
        <div class="container_data">
            <p>{props.data.entreprise}</p>
            <p>{props.data.service}</p>
            <p>{props.data.poste}</p>
        </div>
        <div class="container_mail">{props.data.mail}</div>

      <div class="container_fixe">{props.data.fixe}</div>
      <div class="container_dect">{props.data.dect}</div>

      </div>
  )
}



export default Fiche;

