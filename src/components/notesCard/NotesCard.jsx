import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotesCard.module.css";

const NotesCard = ({ id, title, content, date, username, deleteNote }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.date}>{date}</p>
      <p className={styles.content}>{content}</p>
      <div className={styles.detail_box}>
        <p className={styles.username}>{username}</p>
        <Link to={`edit/${id}`} className={styles.edit_btn}>
          Edit
        </Link>
      </div>
      <button className={styles.delete_btn} onClick={() => deleteNote(id)}>
        X
      </button>
    </div>
  );
};

export default NotesCard;
