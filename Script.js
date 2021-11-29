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
  messageText = messageText + convertText("It's "+ middle_phrase[getRandomNumber(middle_phrase.length)].toLowerCase()+' '+dayOfWeek[now.getDay()]+'!')+'\n \n \n'
  messageText = messageText + end_phrase[getRandomNumber(end_phrase.length)]
  return messageText;
}


// ascii code generation- got it from  www.javascriptkit.com/script/script2/asciitext.shtml

function convertText(textToConvert,booleanRepeat) {
  let inputText = textToConvert.toLowerCase();
  let currIndx = -1;
	let newline = false;
  let outputText = '';
  // slice text on lines
  for (let i=0; i<inputText.length/20-1;i++) {
    let nearestSplitter =inputText.indexOf(' ',(i+1)*20);
    inputText=inputText.substring(0,nearestSplitter)+"\n"+inputText.substring(nearestSplitter+1).trimStart()
  };
  //
  let line0 = "";
  let line1 = "";
  let line2 = "";
  let line3 = "";
  let line4 = "";
  let line5 = "";
  let space = "     ";
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let e = [];
  let f = [];
  let g = [];
  let h = [];
  let I = [];
  let j = [];
  let k = [];
  let l = [];
  let m = [];
  let n = [];
  let o = [];
  let p = [];
  let q = [];
  let r = [];
  let s = [];
  let t = [];
  let u = [];
  let v = [];
  let w = [];
  let x = [];
  let y = [];
  let z = [];
  let zero = [];
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  let five = [];
  let six = [];
  let seven = [];
  let eight = [];
  let nine = [];
  let point = [];
  let comma = [];
  let exclamation = [];
  let apostrophe = [];
  let question = [];
	a[0] = "     ___  ";		a[1] = "    /   | ";		a[2] = "   / /| | ";		a[3] = "  / /_| | ";		a[4] = " / ___  | ";		a[5] = "/_/   |_| ";
	b[0] = " _____  ";		b[1] = "|  _  \\ ";		b[2] = "| |_| | ";		b[3] = "|  _  { ";		b[4] = "| |_| | ";		b[5] = "|_____/ ";
	c[0] = " _____  ";		c[1] = "/  ___| ";		c[2] = "| |     ";		c[3] = "| |     ";		c[4] = "| |___  ";		c[5] = "\\_____| ";
	d[0] = " _____  ";		d[1] = "|  _  \\ ";		d[2] = "| | | | ";		d[3] = "| | | | ";		d[4] = "| |_| | ";		d[5] = "|_____/ ";
	e[0] = " _____  ";		e[1] = "| ____| ";		e[2] = "| |__   ";		e[3] = "|  __|  ";		e[4] = "| |___  ";		e[5] = "|_____| ";
	f[0] = " _____  ";		f[1] = "|  ___| ";		f[2] = "| |__   ";		f[3] = "|  __|  ";		f[4] = "| |     ";		f[5] = "|_|     ";
	g[0] = " _____  ";		g[1] = "/  ___| ";		g[2] = "| |     ";		g[3] = "| |  _  ";		g[4] = "| |_| | ";		g[5] = "\\_____/ ";
	h[0] = " _   _  ";		h[1] = "| | | | ";		h[2] = "| |_| | ";		h[3] = "|  _  | ";		h[4] = "| | | | ";		h[5] = "|_| |_| ";
	I[0] = " _  ";			I[1] = "| | ";			I[2] = "| | ";			I[3] = "| | ";			I[4] = "| | ";			I[5] = "|_| ";
	j[0] = "     _  ";		j[1] = "    | | ";		j[2] = "    | | ";		j[3] = " _  | | ";		j[4] = "| |_| | ";		j[5] = "\\_____/ ";
	k[0] = " _   _   ";		k[1] = "| | / /  ";		k[2] = "| |/ /   ";		k[3] = "| |\\ \\   ";		k[4] = "| | \\ \\  ";		k[5] = "|_|  \\_\\ ";
	l[0] = " _      ";		l[1] = "| |     ";		l[2] = "| |     ";		l[3] = "| |     ";		l[4] = "| |___  ";		l[5] = "|_____| ";
	m[0] = "     ___  ___  ";	m[1] = "    /   |/   | ";	m[2] = "   / /|   /| | ";	m[3] = "  / / |__/ | | ";	m[4] = " / /       | | ";	m[5] = "/_/        |_| ";
	n[0] = " __   _  ";		n[1] = "|  \\ | | ";		n[2] = "|   \\| | ";		n[3] = "| |\\   | ";		n[4] = "| | \\  | ";		n[5] = "|_|  \\_| ";
	o[0] = " _____  ";		o[1] = "/  _  \\ ";		o[2] = "| | | | ";		o[3] = "| | | | ";		o[4] = "| |_| | ";		o[5] = "\\_____/ ";
	p[0] = " _____  ";		p[1] = "|  _  \\ ";		p[2] = "| |_| | ";		p[3] = "|  ___/ ";		p[4] = "| |     ";		p[5] = "|_|     ";
	q[0] = " _____    ";		q[1] = "/  _  \\   ";		q[2] = "| | | |   ";		q[3] = "| | | |   ";		q[4] = "| |_| |_  ";		q[5] = "\\_______| ";
	r[0] = " _____   ";		r[1] = "|  _  \\  ";		r[2] = "| |_| |  ";		r[3] = "|  _  /  ";		r[4] = "| | \\ \\  ";		r[5] = "|_|  \\_\\ ";
	s[0] = " _____  ";		s[1] = "/  ___/ ";		s[2] = "| |___  ";		s[3] = "\\___  \\ ";		s[4] = " ___| | ";		s[5] = "/_____/ ";
	t[0] = " _____  ";		t[1] = "|_   _| ";		t[2] = "  | |   ";		t[3] = "  | |   ";		t[4] = "  | |   ";		t[5] = "  |_|   ";
	u[0] = " _   _  ";		u[1] = "| | | | ";		u[2] = "| | | | ";		u[3] = "| | | | ";		u[4] = "| |_| | ";		u[5] = "\\_____/ ";
	v[0] = " _     _  ";		v[1] = "| |   / / ";		v[2] = "| |  / /  ";		v[3] = "| | / /   ";		v[4] = "| |/ /    ";		v[5] = "|___/     ";
	w[0] = " _          __ ";	w[1] = "| |        / / ";	w[2] = "| |  __   / /  ";	w[3] = "| | /  | / /   ";	w[4] = "| |/   |/ /    ";	w[5] = "|___/|___/     ";
	x[0] = "__    __ ";		x[1] = "\\ \\  / / ";		x[2] = " \\ \\/ /  ";		x[3] = "  }  {   ";		x[4] = " / /\\ \\  ";		x[5] = "/_/  \\_\\ ";
	y[0] = "__    __ ";		y[1] = "\\ \\  / / ";		y[2] = " \\ \\/ /  ";		y[3] = "  \\  /   ";		y[4] = "  / /    ";		y[5] = " /_/     ";
	z[0] = " ______ ";		z[1] = "|___  / ";		z[2] = "   / /  ";		z[3] = "  / /   ";		z[4] = " / /__  ";		z[5] = "/_____| ";
	zero[0] = " _____  ";		zero[1] = "/  _  \\ ";		zero[2] = "| | | | ";		zero[3] = "| |/| | ";		zero[4] = "| |_| | ";		zero[5] = "\\_____/ ";
	one[0] = " ___  ";		one[1] = "|_  | ";		one[2] = "  | | ";		one[3] = "  | | ";		one[4] = "  | | ";		one[5] = "  |_| ";
	two[0] = " _____  ";		two[1] = "/___  \\ ";		two[2] = " ___| | ";		two[3] = "/  ___/ ";		two[4] = "| |___  ";		two[5] = "|_____| ";
	three[0] = " _____  ";		three[1] = "|___  | ";		three[2] = "   _| | ";		three[3] = "  |_  { ";		three[4] = " ___| | ";		three[5] = "|_____/ ";
	four[0] = " _   _  ";		four[1] = "| | | | ";		four[2] = "| |_| | ";		four[3] = "\\___  | ";		four[4] = "    | | ";		four[5] = "    |_| ";
	five[0] = " _____  ";		five[1] = "|  ___| ";		five[2] = "| |___  ";		five[3] = "\\___  \\ ";		five[4] = " ___| | ";		five[5] = "\\_____| ";
	six[0] = " _____  ";		six[1] = "/  ___| ";		six[2] = "| |___  ";		six[3] = "|  _  \\ ";		six[4] = "| |_| | ";		six[5] = "\\_____/ ";
	seven[0] = " _____  ";		seven[1] = "|___  | ";		seven[2] = "    / / ";		seven[3] = "   / /  ";		seven[4] = "  / /   ";		seven[5] = " /_/    ";
	eight[0] = " _____  ";		eight[1] = "/  _  \\ ";		eight[2] = "| |_| | ";		eight[3] = "}  _  { ";		eight[4] = "| |_| | ";		eight[5] = "\\_____/ ";
	nine[0] = " _____  ";		nine[1] = "/  _  \\ ";		nine[2] = "| |_| | ";		nine[3] = "\\___  | ";		nine[4] = " ___| | ";		nine[5] = "|_____/ ";
  point[0] = "   ";point[1] = "   ";point[2] = "   ";point[3] = "   ";point[4] = " _ ";point[5] = "|_|";
  comma[0] = "   ";comma[1] = "   ";comma[2] = "   ";comma[3] = "   ";comma[4] = " _ ";comma[5] = "|/ ";
  exclamation[0] = " _ ";exclamation[1] = "| |";exclamation[2] = "| |";exclamation[3] = "|_|";exclamation[4] = " _ ";exclamation[5] = "|_|";
  apostrophe[0] = " _ ";apostrophe[1] = "|/ ";apostrophe[2] = "   ";apostrophe[3] = "   ";apostrophe[4] = "   ";apostrophe[5] = "   ";
  question[0] = " _______ ";question[1] = "/ _____ \\";question[2] = "|_|   | |";question[3] = "     /_/ ";question[4] = "     _   ";question[5] = "    |_|  ";

	for(let i=0; i < inputText.length; i++) {
		if(inputText.charAt(i) == " ") {line0 += space; 	line1 += space; 	line2 += space; 	line3 += space;		line4 += space;		 	line5 += space}
		if(inputText.charAt(i) == "a") {line0 += a[0]; 		line1 += a[1];		line2 += a[2]; 		line3 += a[3];		line4 += a[4];			line5 += a[5]}
		if(inputText.charAt(i) == "b") {line0 += b[0]; 		line1 += b[1]; 		line2 += b[2]; 		line3 += b[3];		line4 += b[4];			line5 += b[5]}
		if(inputText.charAt(i) == "c") {line0 += c[0]; 		line1 += c[1]; 		line2 += c[2]; 		line3 += c[3];		line4 += c[4];			line5 += c[5]}
		if(inputText.charAt(i) == "d") {line0 += d[0]; 		line1 += d[1]; 		line2 += d[2]; 		line3 += d[3];		line4 += d[4];			line5 += d[5]}
		if(inputText.charAt(i) == "e") {line0 += e[0]; 		line1 += e[1]; 		line2 += e[2]; 		line3 += e[3];		line4 += e[4];			line5 += e[5]}
		if(inputText.charAt(i) == "f") {line0 += f[0]; 		line1 += f[1]; 		line2 += f[2]; 		line3 += f[3];		line4 += f[4];			line5 += f[5]}
		if(inputText.charAt(i) == "g") {line0 += g[0]; 		line1 += g[1];	 	line2 += g[2]; 		line3 += g[3];		line4 += g[4];			line5 += g[5]}
		if(inputText.charAt(i) == "h") {line0 += h[0]; 		line1 += h[1]; 		line2 += h[2]; 		line3 += h[3];		line4 += h[4];			line5 += h[5]}
		if(inputText.charAt(i) == "i") {line0 += I[0]; 		line1 += I[1]; 		line2 += I[2]; 		line3 += I[3];		line4 += I[4];			line5 += I[5]}
		if(inputText.charAt(i) == "j") {line0 += j[0]; 		line1 += j[1]; 		line2 += j[2]; 		line3 += j[3];		line4 += j[4];			line5 += j[5]}
		if(inputText.charAt(i) == "k") {line0 += k[0]; 		line1 += k[1];		line2 += k[2]; 		line3 += k[3];		line4 += k[4];			line5 += k[5]}
		if(inputText.charAt(i) == "l") {line0 += l[0]; 		line1 += l[1]; 		line2 += l[2]; 		line3 += l[3];		line4 += l[4];			line5 += l[5]}
		if(inputText.charAt(i) == "m") {line0 += m[0]; 		line1 += m[1]; 		line2 += m[2]; 		line3 += m[3];		line4 += m[4];			line5 += m[5]}
		if(inputText.charAt(i) == "n") {line0 += n[0];	 	line1 += n[1]; 		line2 += n[2]; 		line3 += n[3];		line4 += n[4];			line5 += n[5]}
		if(inputText.charAt(i) == "o") {line0 += o[0]; 		line1 += o[1];	 	line2 += o[2]; 		line3 += o[3];		line4 += o[4];			line5 += o[5]}
		if(inputText.charAt(i) == "p") {line0 += p[0]; 		line1 += p[1]; 		line2 += p[2]; 		line3 += p[3];		line4 += p[4];			line5 += p[5]}
		if(inputText.charAt(i) == "q") {line0 += q[0]; 		line1 += q[1];	 	line2 += q[2]; 		line3 += q[3];		line4 += q[4];			line5 += q[5]}
		if(inputText.charAt(i) == "r") {line0 += r[0]; 		line1 += r[1];	 	line2 += r[2]; 		line3 += r[3];		line4 += r[4];			line5 += r[5]}
		if(inputText.charAt(i) == "s") {line0 += s[0]; 		line1 += s[1];	 	line2 += s[2]; 		line3 += s[3];		line4 += s[4];			line5 += s[5]}
		if(inputText.charAt(i) == "t") {line0 += t[0]; 		line1 += t[1];	 	line2 += t[2]; 		line3 += t[3];		line4 += t[4];			line5 += t[5]}
		if(inputText.charAt(i) == "u") {line0 += u[0]; 		line1 += u[1]; 		line2 += u[2]; 		line3 += u[3];		line4 += u[4];			line5 += u[5]}
		if(inputText.charAt(i) == "v") {line0 += v[0];	 	line1 += v[1]; 		line2 += v[2]; 		line3 += v[3];		line4 += v[4];			line5 += v[5]}
		if(inputText.charAt(i) == "w") {line0 += w[0]; 		line1 += w[1]; 		line2 += w[2]; 		line3 += w[3];		line4 += w[4];			line5 += w[5]}
		if(inputText.charAt(i) == "x") {line0 += x[0]; 		line1 += x[1]; 		line2 += x[2]; 		line3 += x[3];		line4 += x[4];			line5 += x[5]}
		if(inputText.charAt(i) == "y") {line0 += y[0]; 		line1 += y[1]; 		line2 += y[2]; 		line3 += y[3];		line4 += y[4];			line5 += y[5]}
		if(inputText.charAt(i) == "z") {line0 += z[0];	 	line1 += z[1]; 		line2 += z[2]; 		line3 += z[3];		line4 += z[4];			line5 += z[5]}
		if(inputText.charAt(i) == "0") {line0 += zero[0]; 	line1 += zero[1]; 	line2 += zero[2]; 	line3 += zero[3];	line4 += zero[4];		line5 += zero[5]}
		if(inputText.charAt(i) == "1") {line0 += one[0]; 	line1 += one[1]; 	line2 += one[2]; 	line3 += one[3];	line4 += one[4];		line5 += one[5]}
		if(inputText.charAt(i) == "2") {line0 += two[0]; 	line1 += two[1]; 	line2 += two[2]; 	line3 += two[3];	line4 += two[4];		line5 += two[5]}
		if(inputText.charAt(i) == "3") {line0 += three[0];	line1 += three[1];	line2 += three[2]; 	line3 += three[3];	line4 += three[4];		line5 += three[5]}
		if(inputText.charAt(i) == "4") {line0 += four[0]; 	line1 += four[1]; 	line2 += four[2]; 	line3 += four[3];	line4 += four[4];		line5 += four[5]}
		if(inputText.charAt(i) == "5") {line0 += five[0]; 	line1 += five[1]; 	line2 += five[2]; 	line3 += five[3];	line4 += five[4];		line5 += five[5]}
		if(inputText.charAt(i) == "6") {line0 += six[0]; 	line1 += six[1]; 	line2 += six[2]; 	line3 += six[3];	line4 += six[4];		line5 += six[5]}
		if(inputText.charAt(i) == "7") {line0 += seven[0];	line1 += seven[1];	line2 += seven[2]; 	line3 += seven[3];	line4 += seven[4];		line5 += seven[5]}
		if(inputText.charAt(i) == "8") {line0 += eight[0];	line1 += eight[1];	line2 += eight[2]; 	line3 += eight[3];	line4 += eight[4];		line5 += eight[5]}
		if(inputText.charAt(i) == "9") {line0 += nine[0]; 	line1 += nine[1]; 	line2 += nine[2]; 	line3 += nine[3];	line4 += nine[4];		line5 += nine[5]}
    if(inputText.charAt(i) == ".") {line0 += point[0]; 	line1 += point[1]; 	line2 += point[2]; 	line3 += point[3];	line4 += point[4];		line5 += point[5]}
    if(inputText.charAt(i) == ",") {line0 += comma[0]; 	line1 += comma[1]; 	line2 += comma[2]; 	line3 += comma[3];	line4 += comma[4];		line5 += comma[5]}
    if(inputText.charAt(i) == "!") {line0 += exclamation[0]; 	line1 += exclamation[1]; 	line2 += exclamation[2]; 	line3 += exclamation[3];	line4 += exclamation[4];		line5 += exclamation[5]}
    if(inputText.charAt(i) == "'") {line0 += apostrophe[0]; 	line1 += apostrophe[1]; 	line2 += apostrophe[2]; 	line3 += apostrophe[3];	line4 += apostrophe[4];		line5 += apostrophe[5]}
    if(inputText.charAt(i) == "?") {line0 += question[0]; 	line1 += question[1]; 	line2 += question[2]; 	line3 += question[3];	line4 += question[4];		line5 += question[5]}
		if(i!=0&&inputText.substring(i,(i+1)) == "\n") {newline = true; currIndx=i; break}
	}
	if(newline) {
		outputText = "\n"+line0+"\n"+line1+"\n"+line2+"\n"+line3+"\n"+line4+"\n"+line5;
		outputText += convertText(inputText.substring(currIndx+1),1);
	} else {
		outputText = "\n"+line0+"\n"+line1+"\n"+line2+"\n"+line3+"\n"+line4+"\n"+line5;
		//if(booleanRepeat) {outputText += "\n"}
	}
  return outputText;
}
//let myVar= convertText(end_phrase[getRandomNumber(end_phrase.length)]);
//let myVar = ". , ! ' ? asd"

console.log(generateMessage());