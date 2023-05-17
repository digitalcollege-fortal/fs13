export default function Lista() {
    let frutas = [
      'Banana',
      'Uva',
      'Cajá',
      'Graviola',
      'Morango',
    ];
  
    return (
      <ul>
          {frutas.map(cada => <li>{cada}</li>)}
      </ul>
    );
  }