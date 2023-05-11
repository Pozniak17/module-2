import { EventBoard } from './EventBoard/EventBoard';
import { PageTitle } from './PageTitle/PageTitle';
import event from './json/event.json';

export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />

      <EventBoard events={event} />
    </div>
  );
};
