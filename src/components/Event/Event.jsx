import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

import { formatEventStart, formatEventDuration } from '../utils';
// import { formatEventStart } from 'components/utils/formatEventStart';
// import { formatEventDuration } from 'components/utils/formatEventDuration';

import { iconSize } from '../constants';
import css from './Event.module.css';
import PropTypes from 'prop-types';
export const Event = ({
  events: {
    name,
    location,
    speaker,
    type,
    time: { start, end },
  },
}) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </p>
      {/* тут 2 класи буде css.chip - базовий та css[type] це наш css[free/paid/vip] */}
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  events: PropTypes.exact({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.exact({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
