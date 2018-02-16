import Component from '@ember/component';

export default Component.extend({
  actions: {
    say() {
      console.log('New review was added!');
      this.set('model.newReview.id', this.get('model').reviewList.length + 1);
      let pushReview = {
        id: this.get('model').newReview.id,
        title: this.get('model').newReview.title,
        reviewText: this.get('model').newReview.reviewText
      };
      this.get('model').reviewList.pushObject(pushReview);
      console.log('... after update... ' + this.get('model').newReview.id);
    }
  }
});
