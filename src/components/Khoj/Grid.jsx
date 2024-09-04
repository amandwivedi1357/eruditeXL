/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './AdventureActivities.css';

const AdventureActivities = () => {
  return (
    <div className="activities-grid">
      <div className="activity-card title-card">
        <h2>Adventure Activities</h2>
        <p>
          Our camps offer hands-on learning experiences in settings where campers can connect with nature, acquire life skills, and forge lifelong friendships.
        </p>
      </div>
      <div className="activity-card">
        <img src="/Home/rappling.png" alt="Rappelling" />
        <div className="activity-info">
          <h3>Rappelling</h3>
          <p>Thrilling cliff rappelling adventure.</p>
        </div>
      </div>
      <div className="activity-card">
        <img src="/Home/training.png" alt="Trekking" />
        <div className="activity-info">
          <h3>Trekking</h3>
          <p>Thrilling treks reveal Nainital's wilderness.</p>
        </div>
      </div>
      <div className="activity-card">
        <img src="/Home/camping.png" alt="Camping" />
        <div className="activity-info">
          <h3>Camping</h3>
          <p>Starry camp, unforgettable adventures.</p>
        </div>
      </div>
      <div className="activity-card">
        <img src="/Home/kayaking.png" alt="Kayaking" />
        <div className="activity-info">
          <h3>Kayaking</h3>
          <p>Kayak Naini Lake, serene and invigorating.</p>
        </div>
      </div>
      <div className="activity-card">
        <img src="/Home/village.png" alt="Village Service and Farming" />
        <div className="activity-info">
          <h3>Village Service and Farming</h3>
          <p>Boasting 25 years of expertise in outbound experiential learning.</p>
        </div>
      </div>
      <div className="activity-card">
        <img src="/Home/village2.png" alt="Jeep Safari" />
        <div className="activity-info">
          <h3>Jeep Safari in Jim Corbett</h3>
          <p>Embark on a thrilling jeep safari through Jim Corbett.</p>
        </div>
      </div>
    </div>
  );
};

export default AdventureActivities;
