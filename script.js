function enroll(course) {
  // Handle course enrollment based on the selected course
  switch (course) {
    case 'beginner':
      // Redirect to the Beginner English course page
      window.location.href = 'beginner.html';
      break;
    case 'intermediate':
      // Redirect to the Intermediate English course page
      window.location.href = 'intermediate.html';
      break;
    case 'advanced':
      // Redirect to the Advanced English course page
      window.location.href = 'advanced.html';
      break;
    default:
      // Redirect to homepage if no valid course is selected
      window.location.href = 'index.html';
      break;
  }
}
