import Route from '@ember/routing/route';

let movieDetails = {
  title: 'Greatest Gatsby',
  releaseDate: '2014',
  description: 'unfullfilled love, lot of drugs and violence',
  reviewList: [
    {id: 1, title: '1st review', reviewText: 'blah, blah, blah'},
    {id: 2, title: 'subjective review', reviewText: 'from my point of view, pretty boring'},
    {id: 3, title: 'objective review', reviewText: 'why not using the metrics system'}
  ],
  newReview: {id: 0, title: '', reviewText: ''}
}

export default Route.extend({

  model(){
    return movieDetails;
  }
});
