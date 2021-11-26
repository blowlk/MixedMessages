const begin_phrase = ["'Ello, mate.", "Heeey, baaaaaby.","Hi, honeybunch!","Oh, yoooouhoooo!","How you doin'?","I like your face.","What's cookin', good lookin'?","Howdy, miss.","Why, hello there!","Hey, boo.","Hello, sunshine!","Howdy, partner!","Hey, howdy, hi!","What's kickin', little chicken?","Peek-a-boo!","Howdy-doody!","Hey there, freshman!","My name's Ralph, and I'm a bad guy.","Hi, mister!","I come in peace!","Put that cookie down!","Ahoy, matey!","Hiya!"]

const middle_phrase = ["Exceptional","Improved","Superior","Exceeding","Preferred","Sharpened","Surpassing","Finer","Greater","More appropriate","More desirable","More suitable","More useful","More valuable","Preferable","Prominent","Souped-up","Worthier","Acceptable","Excellent","Favorable","Great","Marvelous","Positive","Satisfactory","Satisfying","Superb","Valuable","Wonderful"
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
,"To die for one’s people is a great sacrifice. To live for one’s people, an even greater sacrifice. I choose to live for my people"
,"You are the Chosen One. You have brought balance to this world. Stay on this path, and you will do it again for the galaxy. But beware your heart"
,"An object cannot make you good or evil. The temptation of power, forbidden knowledge, even the desire to do good can lead some down that path. But only you can change yourself"
,"If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing"
,"I’m one with the Force. The Force is with me"
,"May The Force Be With You!"
]

const check_uniques = (inArray)=> {
  for(let i=0; i<inArray.length;i++){
    for(let j=i; j<inArray.length;j++){
      if (i!==j && inArray[i].toUpperCase() == inArray[j].toUpperCase()){console.log(inArray[j]+' '+j)}
      
    }
  }
};

check_uniques(end_phrase);

