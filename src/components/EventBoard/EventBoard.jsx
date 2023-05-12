import PropTypes from 'prop-types';
import css from './EventBoard.module.css';
import { Event } from 'components/Event/Event';

export const EventBoard = ({ events }) => {
  // console.log(events);
  return (
    <div className={css.eventBoard}>
      {events.map(event => (
        <Event key={event.name} events={event}></Event>
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.array,
};
