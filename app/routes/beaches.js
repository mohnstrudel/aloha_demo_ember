import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').findRecord('beach', params.beach_id);
  }
});
