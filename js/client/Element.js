//Vars et methodes communes entre Creature et Item

var Element = Class(
	{
		constructor: function (id, name)
		{
			this.id = id;
			//this.sentient = true;
			this.HP = 100;
			this.name = name;
			this.status = Constants.STATUS_LIVE;    //constantes definies dans fichier dédié

		},

		receiveDamage: function (combien)
		{
			if (this.status === Constants.STATUS_DEAD)
			{
				return;
			}

			this.HP -= combien;

			if (this.HP <= 0)
			{
				this.status = Constants.STATUS_DEAD;
				this.explodeMe();
			}

			console.log(this.name + " has " + this.HP + " HP left...");

			console.log("");

		},

		dealDamageTo: function (combien, cible)
		{
			console.log(this.name + " deals " + combien + ' dmg to ' + cible.name);

			//pas d'acharnement
			if (cible.status === Constants.STATUS_DEAD)
			{
				console.log(cible.name + " est deja detruit.");

				return;
			}

			cible.receiveDamage(combien);

		},

		explodeMe: function ()
		{
			console.log(this.name + " explose !");

		}

	});




