var Creature = Class(Element,
                     {
	                     constructor: function (id, name)
	                     {
		                     Creature.$super.call(this, id, name);        // Call parent's constructor

		                     this.sentient = true;
		                     console.log('dsfsdgsdgsd');
	                     }
	
                     });
