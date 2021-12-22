const doctors = [
  {
    name: 'Boban Sugareski'
  },
  {
    name: 'Homer Simpsons'
  }
];

const createDoctor = doctor => {
  console.log('==== createDoctor() function called ====');

  setTimeout(() => {
    doctors.push(doctor);
    console.log(`Doctor created: ${doctor.name}`);
  }, 2000)
}

const getDoctors = () => {
  console.log('==== getDoctors() function called ====');

  setTimeout(() => {
    doctors.forEach(doctor => {
      console.log(`Doctor: ${doctor.name}`);
    })
  }, 1000);
}

createDoctor({ name: 'Marge Simpsons' });
getDoctors();