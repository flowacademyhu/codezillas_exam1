/*
5.5. írj függvényt, mely a switch statement-et használja a bemeneti argumentumának feldolgozására (3p)
*/
let today = 'hetfo';

const switchFuggveny = (today) => {
  switch (today) {
    case 'hetfo':
    case 'kedd':
    case 'szerda':
    case 'csutortok':
    case 'pentek':
      console.log('Ma hétköznap van.');
      break;
    case 'szombat':
    case 'vasarnap':
      console.log('Ma hétvége van.');
  }
};

switchFuggveny(today);
