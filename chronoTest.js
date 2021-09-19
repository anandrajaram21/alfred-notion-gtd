import * as chrono from "chrono-node";

var taskName = "Complete something tomorrow";

var parsedStuff = chrono.parse(taskName);

console.log(`Parsed stuff: ${parsedStuff}`);

console.log(
  `ISO String of date in taskName: ${parsedStuff[0].start.date().toISOString()}`
);
