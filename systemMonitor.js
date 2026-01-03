import os from "node:os";

//console.log("CPU",os.cpus());
// console.log("CPU",os.cpus().length);
// console.log("Total Memory", os.totalmem()/(1024*1024*1024),"GB");
// console.log("Free Memory", os.freemem()/(1024*1024*1024),"GB");

// console.log("Up time ", os.uptime()/(60*60)); //hours
// console.log("Host namme : ", os.hostname());
// console.log("User Info : ", os.userInfo());
// console.log("Machine : ", os.machine());

function monitor() {
  //take a snapshot
  //take another snapshot after a second

  const oldCpu = os.cpus();
  setTimeout(() => {
    const newCpus = os.cpus();
    const usage = newCpus.map((cpu, i) => {
      return {
        core: i,
        usage: calculateCpu(oldCpu[i], newCpus[i]) + "%",
      };
    });
    console.clear();
    console.table(usage);
    const usedMemory = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
    console.log(
      `Memory used : ${usedMemory.toFixed(2)} GB / ${(
        os.totalmem() /
        (1024 * 1024 * 1024)
      ).toFixed(2)} GB`
    );
  }, 1000);
}
function calculateCpu(oldCpu, newCpus) {
  const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);
  const idle = newCpus.times.idle - oldCpu.times.idle;
  const total = newTotal - oldTotal;
  const used = total - idle;
  return ((100 * used) / total).toFixed(1);
}
setInterval(monitor, 1000);
