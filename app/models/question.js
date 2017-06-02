import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
