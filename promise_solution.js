const doctors = [
  {
    name: 'Boban Sugareski'
  },
  {
    name: 'Homer Simpsons'
  }
];

const createDoctor = (doctor) => {
  console.log('==== createDoctor() function called ====');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (doctor.name == 'Kosta Petrov') {
          throw new Error('Not permitted **** ***** **** ****.');
        }
        doctors.push(doctor);
        console.log(`Doctor created: ${doctor.name}`);
        resolve(doctor);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

const getDoctors = () => {
  console.log('==== getDoctors() function called ====');

  setTimeout(() => {
    doctors.forEach(doctor => {
      console.log(`Doctor: ${doctor.name}`);
    })
  }, 1000);
}

createDoctor({ name: 'Kosta Petrov' })
  .then(res => {
    getDoctors();
  })
  .catch(err => {
    console.log(`Error happened: ${err}`)
  })
// then catch syntax
// async await syntax

const process = async () => {
  try {
    const doctor = await createDoctor({ name: 'Mile Z.' });
    const doctor = await createDoctor({ name: 'Mile Z.' });
    const doctor = await createDoctor({ name: 'Mile Z.' });
    const doctor = await createDoctor({ name: 'Mile Z.' });
    const doctor = await createDoctor({ name: 'Mile Z.' });
    const doctor = await createDoctor({ name: 'Mile Z.' });
    getDoctors();
  } catch (error) {
    console.log('Se sluci greska', error);
  }
}

process();