const express = require("express");
const app = express();

function formatTrackAddress(city, street, state) {
  return `${street} , ${city}, ${state}`;
}

app.get("/track-store-address", (req, res) => {
  try {
    const city = req.query.city;
    const street = req.query.street;
    const state = req.query.state;

    const response = formatTrackAddress(city, street, state);

    return res.json(response);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

function employeeGreeting(employeeName) {
  return `Welcome to the company, ${employeeName}!`;
}

app.get("/employee-greet", (req, res) => {
  try {
    const employeeName = req.query.employeeName;

    const response = employeeGreeting(employeeName);

    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

function calculatesavingsPerMonth(totalAmount, month) {
  const savings = totalAmount / month;
  return `To save a total amount of ₹12000 in 12 months, you need to save ₹${savings} per month.`;
}

app.get("/calculate-savings-goal", (req, res) => {
  const totalAmount = parseInt(req.query.totalAmount);
  const month = parseInt(req.query.months);
  const response = calculatesavingsPerMonth(totalAmount, month);

  res.json(response);
});

function checkMembershipLevel(points) {
  if (points >= 3000) {
    return "You are a Platinum member.";
  } else if (points >= 2000) {
    return "You are a Gold member.";
  } else if (points >= 1000) {
    return "You are a Silver member.";
  } else {
    return "You are a Bronze member.";
  }
}

app.get("/membership-level", (req, res) => {
  const points = parseInt(req.query.points);
  const response = checkMembershipLevel(points);

  res.json(response);
});

let salaries = [45000, 60000, 35000, 70000, 50000];

function sortSalaries(salary1, salary2) {
  return salary1 - salary2;
}

app.get("/sort-salaries", (req, res) => {
  let response = salaries.sort((salary1, salary2) =>
    sortSalaries(salary1, salary2),
  );

  res.json(response);
});

let tracks = [
  { id: 1, name: "Track One", length: 3.5 },
  { id: 2, name: "Track Two", length: 4.2 },
  { id: 3, name: "Track Three", length: 2.8 },
];

function findTrackByName(tracks, name) {
  const track = tracks.find((track) => track.name === name);
  return track;
}

app.get("/find-track", (req, res) => {
  const name = req.query.name;
  const response = findTrackByName(tracks, name);

  res.json(response);
});

let movies = [
  { id: 1, title: "Movie One", duration: 120 },
  { id: 2, title: "Movie Two", duration: 150 },
  { id: 3, title: "Movie Three", duration: 90 },
];

function filterLongMovies(movie) {
  return movie.duration > 120;
}

app.get("/filter-long-movies", (req, res) => {
  const response = movies.filter((movie) => filterLongMovies(movie));

  res.json(response);
});

let employees = [{ name: "Alice" }, { name: "Bob" }];

function addNewEmployee(employees, name) {
  employees.push({ name: name });
  return employees;
}

app.get("/add-employee", (req, res) => {
  const name = req.query.name;
  const response = addNewEmployee(employees, name);

  res.json(response);
});

function returnSavings(income, expenses) {
  return `You have saved ₹${income - expenses}`;
}

app.get("/calculate-savings", (req, res) => {
  const income = parseInt(req.query.income);
  const expenses = parseInt(req.query.expenses);
  const response = returnSavings(income, expenses);
  res.json(response);
});

let movies1 = [
  { id: 1, title: "Movie One", year: 2014 },
  { id: 2, title: "Movie Two", year: 2016 },
  { id: 3, title: "Movie Three", year: 2018 },
];

function returnRecentMovies(movie) {
  return movie.year > 2015;
}

app.get("/filter-recent-movies", (req, res) => {
  let response = movies1.filter((movie) => returnRecentMovies(movie));
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
