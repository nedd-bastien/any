/* server side */

var firstNameSyllables= [
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

function generateGenericName(syllables, separator)
{
    var firstName = "";
    
    //console.log('syllables : '+syllables);
    //console.log('firstNameSyllables.length : '+firstNameSyllables.length);
    
    var numberOfSyllablesInFirstName = syllables; //2+Math.random()*2;
    
    var separated = false;
    for (var i = 0; i < numberOfSyllablesInFirstName; i++)
    {
        firstName += firstNameSyllables[Math.floor(Math.random()*firstNameSyllables.length)];
        

        if(!separated && i == numberOfSyllablesInFirstName-1 && Math.random()<0.25)
        {
            firstName+=separator;
            separated = true;
            numberOfSyllablesInFirstName++;
        }
    }
    var firstNameLetter = "";
    firstNameLetter = firstName.substring(0,1);
    
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
for (var i=0; i<30; i++)
{
    console.log(    
        generateGenericName(2+Math.round(Math.random()), "'")+'\t\t'+
        generateGenericName(2+Math.round(Math.random()), "'")+'\t\t'+
        generateGenericName(2+Math.round(Math.random()), "'")
    );
}

