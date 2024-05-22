import React, { useEffect, useState } from 'react'; // Importez useEffect et useState
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import Carte from './Carte';

const Ris = () => {
  const [posts, setPosts] = useState([]); // Initialisez l'état pour stocker les posts

  useEffect(() => {
    fetch('127.0.0.1:8000',
    {
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )

     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setPosts(data); // Mettez à jour l'état avec les données récupérées
      })
     .catch((err) => {
        console.log(err.message);
      });
  }, []); // Le tableau vide signifie que cette fonction s'exécute une seule fois au montage du composant

  return (
    <MainCard title="RIS Rendez-vous" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />} style={{background: "linear-gradient(122deg, #628ECB 3.44%, #C8E3F6 90.69%)"}}>
      <Grid container justify="center">
        {posts.map((post, index) => (
          <Grid item margin={2} key={index}> {/* Assurez-vous d'inclure une clé unique pour chaque élément */}
            <Carte src={post.url} /> {/* Ajustez ceci selon la structure de vos données */}
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default Ris;
