import React from 'react'
import style from './style.module.scss'
import Container from "../../Container";
import mail from './assets/mail.svg'
import phone from './assets/phone.svg'
import point from './assets/point.svg'


export default function Footer() {
    return (
        <div className={style.footer}>
            <Container>
                <>
                    <div className={style.maps}>
                        <div className={style.info}>
                            <div className={style.caption}>
                                <h1>Habouba</h1>
                            </div>
                            <div className={style.content}>
                                <p>You can dream, create, design, and buildsa the most wonderful place.</p>
                                <div className={style.contacts}>
                                    <div className={style.contact_item}>
                                        <div className={style.icon}><img src={phone} alt="phone"/></div>
                                        <p>+0123 456 987, +0123 456 987</p>
                                    </div>
                                    <div className={style.contact_item}>
                                        <div className={style.icon}><img src={mail} alt="mail"/></div>
                                        <p>yourmailaddress@gmail.com</p>
                                    </div>
                                    <div className={style.contact_item}>
                                        <div className={style.icon}><img src={point} alt="point"/></div>
                                        <p>www.yourwebsitename.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.links}>
                            <div className={style.caption}>
                                <p>Quick Links</p>
                            </div>
                            <div className={style.content}>
                                <ul>
                                    <li>About Us</li>
                                    <li>Destinations</li>
                                    <li>Latest Blog</li>
                                    <li>Our Team</li>
                                    <li>Latest Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.support}>
                            <div className={style.caption}>
                                <p>Support</p>
                            </div>
                            <div className={style.content}>
                                <ul>
                                    <li>Customer</li>
                                    <li>Support</li>
                                    <li>Privacy & Policy</li>
                                    <li>Terms & Condition</li>
                                    <li>Forum</li>
                                    <li>Tour Guid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.logo}>
                        <h1>Habouba</h1>
                        <p>Copyright @2020 Habouba. Designer Bekba</p>
                    </div>
                </>
            </Container>
        </div>
    )
}