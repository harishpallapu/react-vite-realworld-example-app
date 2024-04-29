import React, { useState } from 'react';

const App = () => {
  const activities = ['Reading', 'Hiking', 'Cooking', 'Painting', 'Yoga'];
  const [suggestedActivity, setSuggestedActivity] = useState('');

  const suggestActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setSuggestedActivity(activities[randomIndex]);
  };

  return (
    <div>
      <h1>Activity Suggestion</h1>
      <button onClick={suggestActivity}>Suggest Activity</button>
      {suggestedActivity && (
        <p>How about {suggestedActivity.toLowerCase()}?</p>
      )}
    </div>
  );
};

export default App;
