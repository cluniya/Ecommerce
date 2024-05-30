import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { Container, Button } from 'react-bootstrap';
import './HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
  // Dummy array for tour items
  const tourItems = [
    { date: 'JUL16', place: 'DETROIT, MI', specPlace: 'DTE ENERGY MUSIC THEATRE' },
    { date: 'JUL19', place: 'TORONTO, ON', specPlace: 'BUDWEISER STAGE' },
    { date: 'JUL22', place: 'BRISTOW, VA', specPlace: 'JIGGY LUBE LIVE' },
    { date: 'JUL29', place: 'PHOENIX, AZ', specPlace: 'AK-CHIN PAVILION' },
    { date: 'AUG2', place: 'LAS VEGAS, NV', specPlace: 'T-MOBILE ARENA' },
    { date: 'AUG7', place: 'CONCORD, CA', specPlace: 'CONCORD PAVILION' }
  ];

  return (
    <div>
      <header>
        <h1>The Generics</h1>
        <div className="button-container">
  <button className="go-to-latest">Go to Latest Album</button>
  <button className="play-btn">►</button>
</div>
      </header>
      <section id="tours" className='container'>
        <h2>TOURS</h2>
        <Container>
          {tourItems.map((tour, index) => (
            <div key={index} className="tour-item">
              <span className="tour-date">{tour.date}</span>
              <span className="tour-place">{tour.place}</span>
              <span className="tour-spec-place">{tour.specPlace}</span>
              <Button className="buy-btn">BUY TICKETS</Button>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
