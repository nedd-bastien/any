//Item extends Element

var Item = Class(
	Element,
	{
		constructor: function (id, name)
		{
			Item.$super.call(this, id, name);        // Call parent's constructor EN PREMIER car
			// constructor ici overrides celui du parent, donc on doit l'appeller manuellement (logique)

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
