/* server side */

var firstNameSyllables = [
	'za',
	'ze',
	'zi',
	'zo',
	'zu',
	'zy',
	'ra',
	're',
	'ri',
	'ro',
	'ru',
	'ry',
	'ta',
	'te',
	'ti',
	'to',
	'tu',
	'ty',
	'pa',
	'pe',
	'pi',
	'po',
	'pu',
	'py',
	'qa',
	'qe',
	'qi',
	'qo',
	'qu',
	'qy',
	'sa',
	'se',
	'si',
	'so',
	'su',
	'sy',
	'da',
	'de',
	'di',
	'do',
	'du',
	'dy',
	'fa',
	'fe',
	'fi',
	'fo',
	'fu',
	'fy',
	'ga',
	'ge',
	'gi',
	'go',
	'gu',
	'gy',
	'ha',
	'he',
	'hi',
	'ho',
	'hu',
	'hy',
	'ja',
	'je',
	'ji',
	'jo',
	'ju',
	'jy',
	'ka',
	'ke',
	'ki',
	'ko',
	'ku',
	'ky',
	'la',
	'le',
	'li',
	'lo',
	'lu',
	'ly',
	'ma',
	'me',
	'mi',
	'mo',
	'mu',
	'my',
	'wa',
	'we',
	'wi',
	'wo',
	'wu',
	'wy',
	'xa',
	'xe',
	'xi',
	'xo',
	'xu',
	'xy',
	'ca',
	'ce',
	'ci',
	'co',
	'cu',
	'cy',
	'va',
	've',
	'vi',
	'vo',
	'vu',
	'vy',
	'ba',
	'be',
	'bi',
	'bo',
	'bu',
	'by',
	'na',
	'ne',
	'ni',
	'no',
	'nu',
	'ny',
];

var firstNameSyllablesWeighted = [
	{s:"za", w:3},
	{s:"ze", w:3},
	{s:"zi", w:3},
	{s:"zo", w:3},
	{s:"zu", w:3},
	{s:"zy", w:1},
	{s:"ra", w:10},
	{s:"re", w:10},
	{s:"ri", w:10},
	{s:"ro", w:10},
	{s:"ru", w:10},
	{s:"ry", w:1},
	{s:"ta", w:10},
	{s:"te", w:10},
	{s:"ti", w:10},
	{s:"to", w:10},
	{s:"tu", w:10},
	{s:"ty", w:5},
	{s:"pa", w:10},
	{s:"pe", w:10},
	{s:"pi", w:10},
	{s:"po", w:10},
	{s:"pu", w:10},
	{s:"py", w:10},
	{s:"qa", w:2},
	{s:"qe", w:2},
	{s:"qi", w:2},
	{s:"qo", w:4},
	{s:"qu", w:2},
	{s:"qy", w:1},
	{s:"sa", w:10},
	{s:"se", w:10},
	{s:"si", w:10},
	{s:"so", w:10},
	{s:"su", w:10},
	{s:"sy", w:1},
	{s:"da", w:10},
	{s:"de", w:10},
	{s:"di", w:10},
	{s:"do", w:10},
	{s:"du", w:10},
	{s:"dy", w:5},
	{s:"fa", w:10},
	{s:"fe", w:10},
	{s:"fi", w:10},
	{s:"fo", w:10},
	{s:"fu", w:10},
	{s:"fy", w:1},
	{s:"ga", w:10},
	{s:"ge", w:10},
	{s:"gi", w:10},
	{s:"go", w:10},
	{s:"gu", w:10},
	{s:"gy", w:10},
	{s:"ha", w:3},
	{s:"he", w:3},
	{s:"hi", w:3},
	{s:"ho", w:3},
	{s:"hu", w:3},
	{s:"hy", w:1},
	{s:"ja", w:10},
	{s:"je", w:10},
	{s:"ji", w:10},
	{s:"jo", w:10},
	{s:"ju", w:10},
	{s:"jy", w:1},
	{s:"ka", w:10},
	{s:"ke", w:10},
	{s:"ki", w:10},
	{s:"ko", w:10},
	{s:"ku", w:10},
	{s:"ky", w:4},
	{s:"la", w:10},
	{s:"le", w:10},
	{s:"li", w:10},
	{s:"lo", w:10},
	{s:"lu", w:10},
	{s:"ly", w:5},
	{s:"ma", w:10},
	{s:"me", w:10},
	{s:"mi", w:10},
	{s:"mo", w:10},
	{s:"mu", w:10},
	{s:"my", w:3},
	{s:"wa", w:10},
	{s:"we", w:10},
	{s:"wi", w:10},
	{s:"wo", w:10},
	{s:"wu", w:10},
	{s:"wy", w:10},
	{s:"xa", w:2},
	{s:"xe", w:2},
	{s:"xi", w:2},
	{s:"xo", w:2},
	{s:"xu", w:2},
	{s:"xy", w:1},
	{s:"ca", w:10},
	{s:"ce", w:10},
	{s:"ci", w:10},
	{s:"co", w:10},
	{s:"cu", w:10},
	{s:"cy", w:3},
	{s:"va", w:10},
	{s:"ve", w:10},
	{s:"vi", w:10},
	{s:"vo", w:10},
	{s:"vu", w:10},
	{s:"vy", w:3},
	{s:"ba", w:10},
	{s:"be", w:10},
	{s:"bi", w:10},
	{s:"bo", w:10},
	{s:"bu", w:10},
	{s:"by", w:1},
	{s:"na", w:10},
	{s:"ne", w:10},
	{s:"ni", w:10},
	{s:"no", w:10},
	{s:"nu", w:10},
	{s:"ny", w:1},
];


	//prep weighted
	var totalweight= 0;
		
	for (i=0; i<firstNameSyllablesWeighted.length; i++)
		totalweight += firstNameSyllablesWeighted[i].w;
		
	console.log("totalweight = "+totalweight);
		
	var weighedfruits=new Array() //new array to hold "weighted" fruits
	var currentfruit=0;
	
	while (currentfruit<firstNameSyllablesWeighted.length)
	{ //step through each fruit[] element
	    for (i=0; i<firstNameSyllablesWeighted[currentfruit].w; i++)
	        weighedfruits[weighedfruits.length]=firstNameSyllablesWeighted[currentfruit];
	    currentfruit++;
	}
	
	/*
	for (i=0; i<weighedfruits.length; i++)
		console.log(weighedfruits[i].s+' '+weighedfruits[i].w);
		*/


function generateGenericName(syllables, separator)
{
	var firstName = "";

	//console.log('syllables : '+syllables);
	//console.log('firstNameSyllables.length : '+firstNameSyllables.length);

	var numberOfSyllablesInFirstName = syllables; //2+Math.random()*2;

	var separated = false;
	for (var i = 0; i < numberOfSyllablesInFirstName; i++)
	{
		//random complet equitable sur firstNameSyllables
		//firstName += firstNameSyllables[Math.floor(Math.random() * firstNameSyllables.length)];

		//random pondéré sur firstNameSyllablesWeighted(s, w)
		
		var randomnumber=Math.floor(Math.random()*totalweight);
		firstName += (weighedfruits[randomnumber].s);

		//bouffer la derniere voyelle
		if (separated)
		{
			firstName = firstName.substring(0, firstName.length - 1);
		}

		//rajouter parfois un separator (param) avant la dernière syllabe.
		if (!separated && i == numberOfSyllablesInFirstName - 1 && Math.random() < 0.25)
		{
			firstName += separator;
			separated = true;
			numberOfSyllablesInFirstName++;
		}
	}
	var firstNameLetter = "";
	firstNameLetter = firstName.substring(0, 1);

	//console.log('syllables : '+syllables);
	//console.log('firstNameLetter : '+firstNameLetter);

	firstName = firstName.substring(1);
	firstNameLetter = firstNameLetter.toUpperCase();
	firstName = firstNameLetter + firstName;

	//console.log('firstNameLetter : '+firstNameLetter);
	return firstName;
}

console.log('Tests :');


//test
for (var i = 0; i < 15; i++)
{
	console.log(
		generateGenericName(2 + Math.round(Math.random()), "'") + '\t\t' +
		generateGenericName(2 + Math.round(Math.random()), "'") + '\t\t' +
		generateGenericName(2 + Math.round(Math.random()), "'")
	);
}


