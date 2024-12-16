function Card(props) {
  return (
    <div className="card">
      <a href={props.link} target="_blank">
        <img src={props.image} alt=""></img>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </a>
    </div>
  );
}
export default Card;
