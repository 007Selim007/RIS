import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import Carte from 'views/dashboardRIS/Carte';
const Api = () => {
  // Déclarez un état pour stocker les données de l'API
  const [data, setData] = useState(null);

  // Utilisez useEffect pour effectuer la requête une seule fois au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Effectuez la requête vers votre API en utilisant Axios
       // const response = await axios.get('http://127.0.0.1:8000/').then;
       axios.get("http://localhost:8000/",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        //setJournals(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));

        // Stockez les données dans l'état
        
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData(); // Appelez la fonction fetchData
  }, []); // Le tableau vide comme deuxième argument signifie que useEffect s'exécute une seule fois au chargement

  // Affichez la première ligne des données
  let firstRow = null;
  if (data && data.length > 0) {
    console.log(data)
    const firstData = data[0];
    console.log("ngc "+ firstData.elements.type)
    
    firstRow = (
      <Carte src={'https://static.wikia.nocookie.net/monster-sanctuary/images/6/62/Spectral_Wolf.png'} nom={firstData.name} elements={firstData.elements.type} weakness={firstData.weakness.type} />
      
    );
    
  }

  return (
    <MainCard title="Monster Details" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <Grid container spacing={gridSpacing}>
        {firstRow}
       
      </Grid>
    </MainCard>
  );
};

export default Api;
