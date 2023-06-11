import ClostIcon from './../images/close.png'
import IndiaIcon from './../images/india.png'
import ReactModal from "react-modal"
import './sign_in.css'
const SignIn = ({ isOpens, closeModals }) => {
    console.log(isOpens)
    return (
        <ReactModal
            isOpen={isOpens}
            onRequestClose={closeModals}
            className='modal'
            style={{

                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <div className="sing-in-container">
                <section className="sign-in-card">
                    <div className='modal-headar'>
                        <div className="logo-box"></div>
                        <button className='modal-close-button' onClick={closeModals}><img className='modal-close-icon' src={ClostIcon} alt=''></img></button>
                    </div>
                    <p className='modal-paragraph'>Enter your 10 digit mobile number to receive an OTP</p>
                    <section className="mobile-no-text-contenar">
                        <div className='number-extention'><img className='india-icon' src={IndiaIcon} alt=''></img><span>+91</span></div>
                        <input className='no-input-field' type="tel" placeholder="Enter mobile..."></input>
                        <button className='modal-submit-button'>Submit</button>

                    </section>
                </section>
            </div>
        </ReactModal>

    )
}
export default SignIn