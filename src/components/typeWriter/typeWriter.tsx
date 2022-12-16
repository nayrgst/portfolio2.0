import Typewriter from 'typewriter-effect';

interface typeProps {
  text: string
}

function TypeString({ text }: typeProps) {
  return (
    <div className="typeName">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(text)
         
       .start();
       }}
       />
    </div>
  );
}

export default TypeString
