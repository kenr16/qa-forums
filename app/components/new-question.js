export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : "",
        image: this.get('image') ? this.get('image') : "",
        content: this.get('content') ? this.get('content') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
