const cohort = {
  cohort_id: 1234,
  cohort_name: 'May2022',
  students: ['Chris','Dave','Mike'],    
};

function myFunction(p1, p2, p3,) {
  return `ID: ${p1} - Cohort: ${p2} - ${p3.length} students in this cohort`
}

console.log(myFunction(cohort.cohort_id,
 cohort.cohort_name,cohort.students))
