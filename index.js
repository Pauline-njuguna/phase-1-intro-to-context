// Your code here

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.map((employee) => {
    return createEmployeeRecord(employee);
  });
}

function createTimeInEvent(employeeRecordsObj, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employeeRecordsObj.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employeeRecordsObj;
}

function createTimeOutEvent(employeeRecordObj, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employeeRecordObj.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employeeRecordObj;
}

function hoursWorkedOnDate(employeeRecordObj, dateStamp) {
  let timeIn = employeeRecordObj.timeInEvents.find(
    (obj) => obj.date === dateStamp
  );

  console.log(timeIn);

  let timeOut = employeeRecordObj.timeOutEvents.find(
    (obj) => obj.date === dateStamp
  );

  console.log(timeOut);

  return parseInt((timeOut.hour - timeIn.hour) / 100);
}

function wagesEarnedOnDate(employeeRecordObj, dateStamp) {
  let payRate = employeeRecordObj.payPerHour;

  console.log(hoursWorkedOnDate(employeeRecordObj, dateStamp) * payRate);
  return parseFloat(hoursWorkedOnDate(employeeRecordObj, dateStamp) * payRate);
}

console.log(wagesEarnedOnDate);

function allWagesFor(employeeRecordObj) {
  let arrayOfDates = employeeRecordObj.timeInEvents.map(
    (dayRecord) => dayRecord.date
  );

  console.log(arrayOfDates);
  let totalWages = arrayOfDates.reduce((total, day) => {
    console.log(total);

    return total + wagesEarnedOnDate(employeeRecordObj, day);
  }, 0);

  return totalWages;
}

function calculatePayroll(arrayOfEmployeeRecords) {
  // Calculate payroll to return sum of pay owed to all emplooyees for all dates, as a number.

  let everyonesWages = arrayOfEmployeeRecords.reduce((total, employee) => {
    return total + allWagesFor(employee);
  }, 0);

  console.log(arrayOfEmployeeRecords);
  return everyonesWages;
}

// map or for each
