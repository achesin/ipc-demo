// each render process is represented by a UI window
// can be more than one render process
const { ipcRenderer } = require('electron')

document.getElementById('start').addEventListener('click', _ => {
    ipcRenderer.send('countdown-start');
})

ipcRenderer.on('countdown', (evt, count) => {
    document.getElementById('count').innerHTML = count;
})