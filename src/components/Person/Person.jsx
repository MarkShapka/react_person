import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    {
      isMarriedFunct(person.isMarried, person.sex, person.partnerName)
    }
  </section>
);

function isMarriedFunct(married, sex, partner) {
  if (!married) {
    return (<p className="Person__partner">I am not married</p>);
  }

  return (sex === 'm'
    ? <p className="Person__partner">{`${partner} is my wife`}</p>
    : <p className="Person__partner">{`${partner} is my husband`}</p>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    partnerName: PropTypes.string,
  }).isRequired,
};