import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from '../../05-MeetupAgenda/MeetupAgenda';
import MeetupAgendaItem from '../../05-MeetupAgenda/MeetupAgendaItem';
import MeetupCover from './MeetupCover';
import MeetupDescription from './MeetupDescription';
import MeetupInfo from './MeetupInfo';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <!-- meetup cover-->
      <meetup-cover :title="meetup.title" :image="meetup.image"></meetup-cover>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description"></meetup-description>
            <template v-if="meetup.agenda?.length">
              <h3>Программа</h3>
              <!-- meetup agenda -->
              <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
            </template>
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <meetup-info :date="meetup.date" :place="meetup.place" :organizer="meetup.organizer"></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
