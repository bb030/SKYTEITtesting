const mondaySdk = require("monday-sdk-js");

module.exports = function() {
  const monday = mondaySdk();
  monday.setToken("eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI1MDk2MzUwOSwidWlkIjo0MjA3NDA0NSwiaWFkIjoiMjAyMy0wNC0xNVQyMToyODoyNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTY0ODgyNDksInJnbiI6InVzZTEifQ.zC9aReRwNLizHKvJ-NE1JMelNBWPnxS3K8J34IOPZ1k");

  return monday;
};
