let mode = 'full';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function blindMode(name) {
    return function() {
        mode = name;
        update();
    };
};

fullBtn.onclick = blindMode('full');
dateBtn.onclick = blindMode('date');
timeBtn.onclick = blindMode('time');

setInterval (update, 1000);
update();

function update() {
    output.textContent = format(mode);
};

function format(formatMode) {
    const now = new Date();

    switch (formatMode) {
        case 'time': 
            return now.toLocaleTimeString();
        case 'date': 
            return now.toLocaleDateString();
        case 'full': 
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
    }
};