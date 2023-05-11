import PropTypes from 'prop-types';
export const Event = ({
  events: { name, location, speaker, type, start, end },
}) => {
  return (
    <div class="event">
      <h2 class="title">{name}</h2>
      <p class="info">
        <i class="icon"></i>
        {location}
      </p>
      <p class="info">
        <i class="icon"></i>
        {speaker}
      </p>
      <p class="info">
        <i class="icon"></i>
        Start Date
      </p>
      <p class="info">
        <i class="icon"></i>
        Duration
      </p>
      {/* <span class="chip free|paid|vip">Event type</span> */}
    </div>
  );
};

Event.propTypes = {
  events: PropTypes.exact({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: {
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    },
  }).isRequired,
};
