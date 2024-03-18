export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <em>
          <strong>example:</strong> {props.example}
        </em>
      </div>
    );
  } else {
    return null;
  }
}
