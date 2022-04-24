const MissionCommander = require('./app/missionCommander');

const mc1 = new MissionCommander('Carlo');
const mc2 = new MissionCommander('Carlo');
const mc3 = new MissionCommander('Carlo');

console.log(`We have 3 mc's: ${mc1.name}, ${mc2.name} & ${mc3.name}`);
