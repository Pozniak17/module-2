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
import { Card, CardTitle, Info, Chip } from './Event.styled';
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
    <Card>
      <CardTitle>{name}</CardTitle>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {duration}
      </Info>
      {/* тут 2 класи буде css.chip - базовий та css[type] це наш css[free/paid/vip] */}
      {/* <span >{type}</span> */}

      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
// className={`${css.chip} ${css[type]}`}

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
