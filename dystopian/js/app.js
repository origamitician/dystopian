var windows = 0;

function clone(z, y, c){
    document.getElementById('menu').style.opacity = '0.9';


    document.body.backgroundColor = 'white';
    document.body.style.cursor = '';

    console.log('test');
    var x = document.createElement('div');
    x.className = 'errorMsg';
    document.body.appendChild(x);

    var top = document.createElement('div');
    top.className = 'top';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].appendChild(top);

    var text = document.createElement('p');
    text.innerHTML =  document.getElementById('textbox').value + ": Prompt";
    text.className = 'topText';
    document.getElementsByClassName('top')[document.getElementsByClassName('errorMsg').length-1].appendChild(text);

    var text = document.createElement('p');
    text.innerHTML = '✖'
    text.className = 'x';
    text.addEventListener('click', removePopup)
    document.getElementsByClassName('top')[document.getElementsByClassName('errorMsg').length-1].appendChild(text);

    var content = document.createElement('div');
    content.className = 'content';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);

    var content = document.createElement('p');
    content.innerHTML = c;
    content.className = 'contentText';
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(content);

    var field = document.createElement('input');
    field.setAttribute('type', 'text');
    field.setAttribute('placeholder', 'Number or String');
    field.className = 'subField';
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(field);
    
    var exit = document.createElement('p');
    exit.innerHTML = 'OK'
    exit.className = 'exitBtn';
    exit.addEventListener('click', testAlert);
    document.getElementsByClassName('content')[document.getElementsByClassName('errorMsg').length-1].appendChild(exit);

    //random window pop up
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.left = z + 'px';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.top = y + 'px';


    //window follows mouse
    /*
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.left = event.clientX + 'px';
    document.getElementsByClassName('errorMsg')[document.getElementsByClassName('errorMsg').length-1].style.top = event.clientY + 'px';*/

    //window.open('https://origamitician.github.io/', 'VIRUS!', 'width=200,height=100')

}

/*document.body.addEventListener('mousemove', function outerClone(){
    clone((Math.floor(Math.random() * window.innerWidth)-175), (Math.floor(Math.random() * window.innerHeight)-50), 'Access permitted to 10.9.3.1');
});*/

var code = "function targetMicrochip (id, command){<br>&nbsp;&nbsp;&nbsp;&nbsp;var location = getReference(allMicrochips.json).microchipList.indexOf(id)<br>&nbsp;&nbsp;&nbsp;&nbsp;getMicrochip(location).activate(command)<br>&nbsp;&nbsp;&nbsp;&nbsp;if(Math.floor(Math.random()*3) == 1){ //1 in 3 chance of dying<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minecraft[location].setCommand('/kill e')<br>&nbsp;&nbsp;&nbsp;&nbsp;}else{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location.getDNASample()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pointMutation(Math.floor(Math.random()*getIndividual(id).entireGenome.length()))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;openManipulationMenu();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//日本語わかる人いる!?<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}";


var counter = 0;

document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
   var uni_code = key_dtl.keyCode || key_dtl.which; 
   var key_name = String.fromCharCode(uni_code); 
    counter+=6;
    if(code[counter-1] == '<'){
        counter+=3;
    }else if (code[counter-1] == '&'){
        counter+=5;
    }
    /*document.getElementById('consoleCode').innerHTML += key_name;*/
    document.getElementById('consoleCode').innerHTML = code.substring(0, counter) + '>';
}


function addRecentTargets(names, ids, stat){
    var outer = document.createElement('div');
    outer.className = 'indivTargetHolder';
    document.getElementById('notificationCode').appendChild(outer);

    var name = document.createElement('p');
    name.className = 'name';
    name.innerHTML = names.toUpperCase();
    name.style.color = 'yellow'
    document.getElementsByClassName('indivTargetHolder')[document.getElementsByClassName('indivTargetHolder').length - 1].appendChild(name);

    var id = document.createElement('p');
    id.className = 'id';
    id.innerHTML = ids;
    id.style.color = 'lightgrey';
    document.getElementsByClassName('indivTargetHolder')[document.getElementsByClassName('indivTargetHolder').length - 1].appendChild(id);

    var status = document.createElement('p');
    status.className = 'status';
    status.innerHTML = "STATUS: " + stat;
    status.style.color = 'lime';
    document.getElementsByClassName('indivTargetHolder')[document.getElementsByClassName('indivTargetHolder').length - 1].appendChild(status);
}

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function openMenu(){
    document.getElementById('entirepage').style.opacity = '0.7';
    var m = document.getElementById('menu');
    m.style.display = 'block';
    m.style.top = '260px';
    m.style.height = '350px';
    document.getElementById('title').innerHTML = document.getElementById('textbox').value + "<sup id = 'sup'>[Expand]</sup>";

    //generate random id
    var id = '#' + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)]+ (Math.floor(Math.random() * 99899999)+100000);
    id.toUpperCase();
    document.getElementById('dob').innerHTML = 'ID: ' + id;

    //generate random coordinate
    var latitude = (Math.floor(Math.random() * 181)-90) + "." + Math.floor(Math.random() * 101);
    var longitude = (Math.floor(Math.random() * 361)-180) + "." + Math.floor(Math.random() * 101);
    document.getElementById('coords').innerHTML = 'Location: ' + latitude + ', ' + longitude;
    
}

var allCommands = ['Walk forward (int) steps', 'Walk backwards (int) steps', 'Walk left (int) steps', 'Walk right (int) steps', 'Shout (string)','Shout (string)', 'Whisper (string)', 'Stand still', 'Collapse', 'Left Punch', 'Right Punch', 'Left Jab', 'Right Jab', 'Left Front Kick', 'Right Front Kick', 'Left Back Kick', 'Right Back Kick', 'Hug (int) seconds', 'Kiss (int) seconds', 'Stand Up', 'Sit Down', 'Raise hands', 'Run', 'Mutate DNA', 'Inhibit mitosis', 'Denature enzyme (string)', 'Denature protein (string)', 'Release (string) hormone', 'Instant Death', 'Suicide', 'Inflict terminal disease', 'Retrieve $(int) from account'];

var allCommandsText = [{instructions: 'Enter number of steps to walk forward', result: 'forward'}, {instructions: 'Enter number of steps to walk backward', result: 'backwards'}, {instructions: 'Enter number of steps to walk left', result: 'to the left'}, {instructions: 'Enter number of steps to walk right', result: 'to the right'}, {instructions: 'Enter a phrase to shout', result: 'shout'}, {instructions: 'Enter a phrase to say', result: 'said'}, {instructions: 'Enter a phrase to whisper', result: 'whispered'}, {instructions: 0, result: 'stand still'}, {instructions: 0, result: 'Collapsed'}, {instructions: 0, result: 'Punched left hand'}, {instructions: 0, result: 'Punched right hand'}, {instructions: 0, result: 'Jabbed left hand'},
{instructions: 0, result: 'Jabbed right hand'}, {instructions: 0, result: 'Front Kicked left leg'}, {instructions: 0, result: 'Front Kicked right leg'}, {instructions: 0, result: 'Back Kicked left leg'},
{instructions: 0, result: 'Back Kicked right leg'},
{instructions: 'Enter a hugging duration', result: 'hugged for'}, {instructions: 'Enter a kissing duration', result: 'kissed for'}, {instructions: '0', result: '0'},{instructions: '0', result: 'stood up'}, {instructions: '0', result: 'sat down'}, {instructions: '0', result: 'ran at top speed'},{instructions: '0', result: 'ran'},{instructions: '0', result: 'successfully inhibited mitosis'}, {instructions: 'Enter an enzyme name to denature', result: 'denatured enzyme'}, {instructions: 'Enter a protein name to denature', result: 'denatured protein'}, {instructions: 'Enter a hormone name to release', result: 'released hormone'}, {instructions: '0', result: 'die'},{instructions: '0', result: 'Committed suicide'},{instructions: '0', result: 'Diagnosed with cancer'}, {instructions: 'Enter an amount to retrieve from bank account', result: 'retrieve from bank account'},]; 

document.getElementById('text').addEventListener('click', openMenu);

function action(){
    
    if(this.innerHTML.includes('(')){
        windows++;
        clone(250+(70*windows), 125+(45*windows), allCommandsText[allCommands.indexOf(this.innerHTML)].instructions);

    }else{
        
        addRecentTargets(document.getElementById('textbox').value, document.getElementById('dob').innerHTML, allCommandsText[allCommands.indexOf(this.innerHTML)].result);

        setTimeout(750, createNotification(document.getElementById('textbox').value, allCommandsText[allCommands.indexOf(this.innerHTML)].result, null, false))
        
    }
}

function removePopup(){
    this.parentElement.parentElement.remove();
    windows -=1;
}


// event listeners
for (var i = 0; i < document.getElementsByClassName('action').length; i++){
    document.getElementsByClassName('action')[i].addEventListener('click', action);
}

function testAlert(){
    //searching algorithm
    var position;
    var valueOfInput;
    for(var index = 0; index < allCommandsText.length; index++){
        if(allCommandsText[index].instructions == this.parentElement.getElementsByClassName('contentText')[0].innerHTML){
            position = index;
            break;
        }
    }
    valueOfInput = this.parentElement.getElementsByClassName('subField')[0].value;
    createNotification(document.getElementById('textbox').value, position, valueOfInput, true);
    /*this.parentElement.parentElement.remove();
    windows -=1;*/
    var textHolder;
    if(position == 0 || position == 1 || position == 2 || position == 3){
        textHolder = 'Walked ' + valueOfInput + ' steps ' + allCommandsText[position].result + ".";
    }else if(position == 4 || position == 5 || position == 6){
        textHolder = allCommandsText[position].result + ": '" + valueOfInput+ "'";
    }else if(position == 17 || position == 18){
        textHolder = allCommandsText[position].result + " " + valueOfInput+ " seconds!";
    }else if(position == 25 || position == 26 || position == 27){
        textHolder = allCommandsText[position].result + " '" + valueOfInput + "'";
    }else if(position == 31){
        textHolder = "$" + valueOfInput + " retrieved from bank account";
    }
    
    addRecentTargets(document.getElementById('textbox').value, document.getElementById('dob').innerHTML, textHolder);
}

function closeMenu(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('entirepage').style.opacity = '1';
}

document.getElementById('close').addEventListener('click', closeMenu);

function createNotification(n, phrase, v, input){
    var d = document.createElement('div');
    d.className = 'notification';
    
    document.body.appendChild(d);

    var p = document.createElement('p');
    p.className = 'notificationHeader';
    p.innerHTML = 'Command Executed'
    document.getElementsByClassName('notification')[document.getElementsByClassName('notification').length-1].appendChild(p);

    var p = document.createElement('p');
    p.className = 'notificationContent';
    if(input == false){
        p.innerHTML = "Success - " + n + ': ' + phrase.toLowerCase() + '.';
    }else{
        if(phrase == 0 || phrase == 1 || phrase == 2 || phrase == 3){
            p.innerHTML = "Success - " + n + ' has walked ' + v + ' steps ' + allCommandsText[phrase].result + ".";
        }else if(phrase == 4 || phrase == 5 || phrase == 6){
            p.innerHTML = "Success - " + n + ': ' + allCommandsText[phrase].result + " '" + v + "'";
        }else if(phrase == 17 || phrase == 18){
            p.innerHTML = "Success - " + n + ': ' + allCommandsText[phrase].result + " " + v + " seconds!";
        }else if(phrase == 25 || phrase == 26 || phrase == 27){
            p.innerHTML = "Success - " + n + ': ' + allCommandsText[phrase].result + " '" + v + "'";
        }else if(phrase == 31){
            p.innerHTML = "Success - " + "$" + v + " retrieved from " + n + "'s bank account";
        }
        
    }
    
    document.getElementsByClassName('notification')[document.getElementsByClassName('notification').length-1].appendChild(p);

    let temp = document.getElementsByClassName('notification')[document.getElementsByClassName('notification').length-1];

    var pos = -300
    var count = 1;
    var id = setInterval(animate, 10);
    function animate(){
        if(pos == 180){
            clearInterval(id);
            var nid = setInterval(unAnimate, 10);
        }else{
            pos+=10;
            temp.style.top = pos + 'px';
        }

        function unAnimate(){
            if(count > 600){
                pos-=3.5;
                temp.style.top = pos + 'px';
                if(pos <= -500){
                    clearInterval(nid);
                }
            }else{
                count++;
            }
        }
    }
}

