import React, {useState} from 'react'
import style from './style.module.scss'
import language from './assets/language.svg'

export default function Language() {
    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState("en")

    return (
        <div className={style.language}>
            <button className={style.btnLang} style={{background : open ? "#2f80ED" : "white"}} onClick={() => setOpen(!open)}>
                <div>
                    {open ?
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 7.5H17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 12.5H17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.58371 2.5C8.17983 4.74968 7.43555 7.34822 7.43555 10C7.43555 12.6518 8.17983 15.2503 9.58371 17.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.417 2.5C11.8209 4.74968 12.5652 7.34822 12.5652 10C12.5652 12.6518 11.8209 15.2503 10.417 17.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    :
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 7.5H17" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 12.5H17" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.58371 2.5C8.17983 4.74968 7.43555 7.34822 7.43555 10C7.43555 12.6518 8.17983 15.2503 9.58371 17.5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.417 2.5C11.8209 4.74968 12.5652 7.34822 12.5652 10C12.5652 12.6518 11.8209 15.2503 10.417 17.5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    }
                </div>
            </button>
            <div className={style.switch} style={{height: open ? "auto" : "0px"  }}>
                <button onClick={() => setLang("ru")} style={{background: lang === "ru" ? "#3E3E3E " : "", color: lang === "ru" ? "#fff" : "" }}>ru</button>
                <button onClick={() => setLang("en")} style={{background: lang === "en" ? "#3E3E3E " : "", color: lang === "en" ? "#fff" : "" }}>en</button>
            </div>
        </div>
    )
}