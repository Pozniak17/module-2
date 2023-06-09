import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import { Container } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  // console.log(events);
  return (
    <Container>
      {events.map(event => (
        <Event key={event.name} events={event}></Event>
      ))}
    </Container>
  );
};

EventBoard.propTypes = {
  events: PropTypes.array,
};
