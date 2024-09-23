/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './AdventureActivities.css';
import { motion } from 'framer-motion';
import { slideIn, slideInRight } from '../../utils/data';

const AdventureActivities = () => {
  return (
    <div className="activities-grid">
      <motion.div
      initial="hidden"
      variants={slideIn}
      whileInView={'visible'}
      className="activity-card title-card">
        <h2>Adventure Activities</h2>
        <p>
          Our camps offer hands-on learning experiences in settings where campers can connect with nature, acquire life skills, and forge lifelong friendships.
        </p>
      </motion.div>
      <motion.div
      initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/rappling.png" alt="Rappelling" />
        <div className="activity-info">
          <h3>Rappelling</h3>
          <p>Thrilling cliff rappelling adventure.</p>
        </div>
      </motion.div>
      <motion.div
      initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/training.png" alt="Trekking" />
        <div className="activity-info">
          <h3>Trekking</h3>
          <p>Thrilling treks reveal Nainital's wilderness.</p>
        </div>
      </motion.div>
      <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/camping.png" alt="Camping" />
        <div className="activity-info">
          <h3>Camping</h3>
          <p>Starry camp, unforgettable adventures.</p>
        </div>
      </motion.div>
      <motion.div
            initial="hidden"
            variants={slideIn}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/kayaking.png" alt="Kayaking" />
        <div className="activity-info">
          <h3>Kayaking</h3>
          <p>Kayak Naini Lake, serene and invigorating.</p>
        </div>
      </motion.div>
      <motion.div
      initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/village.png" alt="Village Service and Farming" />
        <div className="activity-info">
          <h3>Village Service and Farming</h3>
          <p>Boasting 25 years of expertise in outbound experiential learning.</p>
        </div>
      </motion.div>
      <motion.div
      initial="hidden"
            variants={slideInRight}
            whileInView={'visible'}
      className="activity-card">
        <img loading="lazy" src="/Home/village2.png" alt="Jeep Safari" />
        <div className="activity-info">
          <h3>Jeep Safari in Jim Corbett</h3>
          <p>Embark on a thrilling jeep safari through Jim Corbett.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdventureActivities;
