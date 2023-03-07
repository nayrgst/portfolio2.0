import { useEffect, useState } from 'react';

function Age({ birthdate }: { birthdate: string }) {
  const [age, setAge] = useState(calculateAge(birthdate));

  function calculateAge(birthday: string) {
    const diff = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge((prevAge) => prevAge + 1);
    }, 31536000000)
    
    return () => clearInterval(intervalId)
   }, [])

  return (
  <>{age}</>
  );
}

export default Age;