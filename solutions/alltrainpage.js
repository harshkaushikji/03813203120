// AllTrainsPage.js

import React, { useEffect, useState } from 'react';
import TrainItem from './trainitem';
import { fetchAllTrains } from ;

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllTrains();
      setTrains(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <TrainItem key={train.id} train={train} />
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsPage;
