import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('surfboards').then(fullfill, reject);

    function fullfill(answer){
      console.log(`The answer is ${answer}`);
    }

    function reject(reason){
      console.log(`Could not resolve the answer. Reason: ${reason}`);
    }
  }
});
