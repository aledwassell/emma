import styles from './Notes.module.css';

export default function Note({note}: any) {
  const {title, content, created} = note || {};

  return (
    <div className={styles.note}>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </div>
  );
}
