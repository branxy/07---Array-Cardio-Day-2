// ## Array Cardio Day 2
const div = document.createElement("div");
document.body.appendChild(div);

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// 1. Array.prototype.some() // is at least one person 19 or older?
{
  const hasOlderThan19 = people.some(
    (el) => new Date().getFullYear() - el.year >= 19
  );
  const res = document.createElement("div");

  res.textContent = `1. At least one person 19 or older: ${hasOlderThan19};`;
  div.appendChild(res);
}

// Array.prototype.every() // is everyone 19 or older?
{
  const everyoneOlderThan19 = people.every(
    (el) => new Date().getFullYear() - el.year >= 19
  );
  const res = document.createElement("div");

  res.textContent = `2. Everyone is 19 or older: ${everyoneOlderThan19};`;
  div.appendChild(res);
}

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
{
  const id823423 = comments.find((el) => el.id === 823423);
  const res = document.createElement("div");

  res.textContent = `3. Comment with the ID of 823423: "${id823423.text}";`;
  div.appendChild(res);
}

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
{
  const id823423 = comments.findIndex((el) => el.id === 823423);
  comments.splice(id823423, 1);
  const res = document.createElement("div");
  commentIsDeleted =
    comments.find((el) => el.id === 823423) === undefined ? "yes" : "no";
  res.textContent = `4. Comment with the ID of 823423 is deleted: ${commentIsDeleted};`;
  div.appendChild(res);
}
