
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends React.Component {
    state = {
      cards: [
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "baz" }
      ],
      selected: {}
    };
  
    handleSelect = id =>
      this.setState(state => ({
        selected: { ...state.selected, [id]: !state.selected[id] }
      }));
  
    render() {
      const { cards, selected } = this.state;
      return (
        <div>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              handleSelect={this.handleSelect}
              selected={selected[card.id]}
            />
          ))}
        </div>
      );
    }
  }
  
  const Card = ({ card, handleSelect, selected }) => {
    const handleClick = () => handleSelect(card.id);
    return (
      <div className={selected ? "selected" : ""} onClick={handleClick}>
        {card.id}-{card.name}
      </div>
    );
  };
  
 export default App

