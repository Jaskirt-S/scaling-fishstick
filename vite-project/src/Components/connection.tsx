import { useEffect, useState } from 'react';
import axios from 'axios';

const Connection = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/Api/messege')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Backend Response:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Connection;
