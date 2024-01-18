import styles from "./index.module.css";
import profilePicture from "../../assets/react.svg";

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logoWrapper}>
                <img src="/vite.svg" alt="Logo" />
            </div>
            <div className={styles.NavbarContents}>
                <a href={"/"}>Home</a>
                <a href={"/hackathon"}>Hackathon</a>
                <a href={"/competitions"}>Competitions</a>
                <a href={"/workshops"}>Workshops</a>
                <a href={"/contact"}>Contact</a>
				<div>
					<img src={profilePicture} alt="Profile Picture" />
				</div>
            </div>
        </div>
    );
};

export default Navbar;
