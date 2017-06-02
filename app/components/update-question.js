import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        date: moment().format('MMMM Do YYYY'),
        image: this.get('image'),
        content: this.get('content'),
        detail: this.get('detail'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
