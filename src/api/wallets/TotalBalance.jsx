import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalBalance = () => {
  const [balance, setTotalBalance] = useState(null);

  useEffect(() => {
    // Effectuez une requête GET vers votre API Django
    axios
      .get('http://192.168.149.175:8003/api/total_balance/')
      .then((response) => {
        // Mettez à jour l'état avec le solde total
        setTotalBalance(response.data.total_balance);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération du solde total :', error);
      });
  }, []);

  return <span>{balance} $</span>;
};

export default TotalBalance;
