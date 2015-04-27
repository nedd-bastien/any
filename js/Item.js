var Item = Class(Element,
                 {
	                 constructor: function (id, name)
	                 {
		                 Item.$super.call(this, id, name);        // Call parent's constructor EN PREMIER

		                 this.sentient = false;

	                 },

	                 //test d'appel interne de methode de la superclasse
	                 maraver:     function (degat)
	                 {
		                 console.log('maraver');

		                 //super method call :
		                 //classe fille . $superp . fonction_parente . call (this, params);

		                 Item.$superp.receiveDamage.call(this, degat);

		                 Item.$superp.receiveDamage.call(this, degat);
		                 Item.$superp.receiveDamage.call(this, degat);
	                 }

                 });
