import styles from '../styles/LogoPage.module.css';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom';
import PixelWriting from '../components/PixelWriting';

export default function LogoPage() {
    const navigate = useNavigate();
    return (
        <div className={styles.logoContainer}>
            <div
                className={styles.logo}
                onClick={() => {
                    navigate('/main');
                }}
                style={{cursor: 'pointer'}}
            >
                {/* <Logo multi={8} /> */}
                <PixelWriting str={'Unumset'} fontProps={{size: 10}} />
            </div>
        </div>
    );
}
