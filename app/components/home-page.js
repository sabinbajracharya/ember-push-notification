import Ember from 'ember';

export default Ember.Component.extend({
  firebaseservice: Ember.inject.service(), 
  didInsertElement() {
    this._super(...arguments);
    this.get('firebaseservice');
    
  }
});
