const begin_phrase = ["'Ello, mate."
,"Heeey, baaaaaby."
,"Hi, honeybunch!"
,"Oh, yoooouhoooo!"
,"How you doin'?"
,"I like your face"
,"What's cookin', good lookin'?"
,"Howdy!"
,"Why, hello there!"
,"Hey, boo"
,"Hello, sunshine!"
,"Howdy, partner!"
,"Hey, howdy, hi!"
,"What's kickin', little chicken?"
,"Peek-a-boo!"
,"Howdy-doody!"
,"Hey there, freshman!"
,"My name's Ralph, and I'm a bad guy."
,"Hi!"
,"I come in peace!"
,"Put that cookie down!"
,"Ahoy, matey!"
,"Hiya!"]

const middle_phrase = ["Exceptional"
,"Improved"
,"Superior"
,"Exceeding"
,"Preferred"
,"Sharpened"
,"Surpassing"
,"Finer"
,"Greater"
,"More appropriate"
,"More desirable"
,"More suitable"
,"More useful"
,"More valuable"
,"Preferable"
,"Prominent"
,"Souped-up"
,"Worthier"
,"Acceptable"
,"Excellent"
,"Favorable"
,"Great"
,"Marvelous"
,"Positive"
,"Satisfactory"
,"Satisfying"
,"Superb"
,"Valuable"
,"Wonderful"
]

const end_phrase = ["Help me, Obi-Wan Kenobi. You're my only hope."
,"I find your lack of faith disturbing"
,"The Force will be with you. Always."
,"Why, you stuck-up, half-witted, scruffy-looking nerf herder!"
,"Never tell me the odds!"
,"Do. Or do not. There is no try."
,"When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned"
,"I'll never turn to the dark side. You've failed, your highness. I am a Jedi, like my father before me"
,"Just for once, let me look on you with my own eyes"
,"There's always a bigger fish"
,"You can't stop the change, any more than you can stop the suns from setting"
,"Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you"
,"Well, if droids could think, there'd be none of us here, would there?"
,"I'm just a simple man trying to make my way in the universe"
,"To die for one's people is a great sacrifice. To live for one's people, an even greater sacrifice. I choose to live for my people"
,"You are the Chosen One. You have brought balance to this world. Stay on this path, and you will do it again for the galaxy. But beware your heart"
,"An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself"
,"If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing"
,"I'm one with the Force. The Force is with me"
,"May The Force Be With You!"
]
//
const all_message_prases =[begin_phrase,middle_phrase,end_phrase]
//check unique and remove dublicates
const createUniqArray = (inArray)=> {
  for(let i=0; i<inArray.length;i++){
    //console.log(inArray[i])
    for(let j=i+1; j<inArray.length;j++){
      if (inArray[i].toUpperCase() == inArray[j].toUpperCase()){
        let removedItem = inArray.splice(j, 1);
        //console.log('removed items - '+removedItem);
      }
      
    }
  }
};
// get random number
const getRandomNumber=(maxNumber)=>{
  return Math.floor(Math.random()*maxNumber)
}
// check uniques in all arrays
for(let i=0;i<all_message_prases.length;i++)
{
  createUniqArray(all_message_prases[i]);
};
// generate whole message
const generateMessage =() =>{
  let dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let now = new Date();
  let messageText = begin_phrase[getRandomNumber(begin_phrase.length)]+'\n';
  messageText = messageText +"It's "+ middle_phrase[getRandomNumber(middle_phrase.length)].toLowerCase()+' '+dayOfWeek[now.getDay()]+'!\n'
  messageText = messageText + end_phrase[getRandomNumber(end_phrase.length)]
  return messageText;
}

console.log(generateMessage());