import styles from "./Sponsers.module.css";
import twinkle from "./assets/singlestar.png";
import admissiondirect from "./assets/Admissionsdirect.png";
import ed from "./assets/edalliance.png";

const Sponsers = () => {
	return (
		<div className={styles.sponsorsLogoWrapper}>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a href="https://iedc.sngist.org/" target="_blank">
						<img src="/iedc.png" alt="IEDC SNGIST Logo" />
					</a>{" "}
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
				</div>
			</div>
			<div className={styles.lineThree} style={{ width: "40%" }}></div>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a href="https://www.admissionsdirect.com/" target="_blank">
						<img
							src={admissiondirect}
							alt="admissionsdirect LOGO"
						/>
					</a>
					<a href="https://www.admissionsdirect.com/" target="_blank">
						<img
							src={ed}
							alt="admissionsdirect LOGO"
						/>
					</a>
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
				</div>
			</div>
			<div className={styles.lineThree}></div>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a
						href="https://www.instagram.com/sngist_cse"
						target="_blank"
					>
						<img src="/vega.png" alt="vega" />
					</a>
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Sponsers;
