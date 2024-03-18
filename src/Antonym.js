export default function Antonym(props) {
  if (props.antonyms) {
    return (
      <ul className="Synonym">
        <strong>Antonym:</strong>{" "}
        {props.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
