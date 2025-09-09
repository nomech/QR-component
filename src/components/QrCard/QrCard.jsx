import React from 'react';
import styles from './QrCard.module.css';

const QrCard = ({ qr, title, text }) => {
	return (
		<div className={styles.card}>
			<img src={qr} alt="QR Code" className={styles.qr} />

			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default QrCard;
