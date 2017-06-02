import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        date: moment().format('MMMM Do YYYY'),
        image: this.get('image') ? this.get('image') : "",
        content: this.get('content') ? this.get('content') : "",
        detail: this.get('detail') ? this.get('detail') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
