export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        <strong>Synonym:</strong>{" "}
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
