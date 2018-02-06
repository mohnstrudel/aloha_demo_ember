import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // Создаем класс
    const Surfer = Ember.Object.extend({
      sup(comment){
        alert(`Sup? I am ${this.get('name')}. My comment on this whole thing: ${comment}.`);
      }
    });
    // Создаем объект этого класса
    let kai = Surfer.create({
      name: 'Uncle Kai'
    });

    // Создаем подкласс
    const WahineSurfer = Surfer.extend({
      sup(comment){
        this._super(`${comment}, :)`);
      }
    });

    let sistah = WahineSurfer.create({
      name: 'Auntie Makai'
    });

    sistah.sup('I am a Wahine');

    kai.sup('Shootz Brah!');

    



    const Surferihno = Ember.Object.extend({
      name: null,
      surfboard: null,

      nameAndBoard: Ember.computed('name', 'surfboard', function(){
        return `My name is ${this.get('name')} and I ride a ${this.get('surfboard')} `;
      }),

      sup(comment){
        alert(`Sup!? ${comment}`);
      }
    });

    let kook = Surferihno.create({
      name: 'Biff',
      surfboard: 'foamy'
    });

    kook.sup(kook.get('nameAndBoard'));




  }
});
