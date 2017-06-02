import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       author: this.get('author'),
       date: moment().format('MMMM Do YYYY'),
       content: this.get('content'),
       rating: this.get('rating'),
       question: this.get('question'),
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
