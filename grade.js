function grade(score = "") {
  if (score > 100 || score < 0) {
    console.log("the error message");
  } else if (score >= 80) {
    console.log("You got A");
  } else if (score >= 70) {
    console.log("You got B");
  } else if (score >= 60) {
    console.log("You got C");
  } else if (score >= 50) {
    console.log("You got D");
  } else {
    console.log("You got F");
  }
}

grade(99);
grade(61.9);
grade(79.9);
grade(49.9);
grade(59.9);
grade("22");
