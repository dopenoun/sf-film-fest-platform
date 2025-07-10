
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Community() {
  const { year } = useParams();
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    const fetchCommunityData = async () => {
      const response = await fetch(`/community/${year}`);
      const data = await response.json();
      setCommunityData(data);
    };
    fetchCommunityData();
  }, [year]);

  return (
    <div>
      <h2>Community</h2>
      {communityData ? (
        <ul>
          {communityData.threads.map(thread => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading community data...</p>
      )}
    </div>
  );
}

export default Community;
