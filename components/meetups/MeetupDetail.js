import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <adress>{props.adress}</adress>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
