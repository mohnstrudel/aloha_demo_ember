import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mahalo');
  this.route('beaches', function(){
    this.route('black_sand');
  });
  this.route('surfboards', {path: '/boards'});
  this.route('countries', function(){
    this.route('egypt');
  });
});

export default Router;
