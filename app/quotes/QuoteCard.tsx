import styles from './Notes.module.css';

export default function QuoteCard({data}: any) {
  const {title, content, created} = data || {};

  return (
    <div className={styles.note}>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </div>
  );
}
