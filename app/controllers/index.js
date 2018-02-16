import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    select(review){
      console.log("Review button was clicked... " + review);
    },
    say(){
      console.log('say');
    }
  }
});
