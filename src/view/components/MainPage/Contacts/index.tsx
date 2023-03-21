import React, {useState} from 'react'
import { css } from '../../../../helpers/css'
import s from './index.module.scss'
import GoogleMap  from 'google-map-react';
import { useAppState } from "../../../../store/reduxStore";
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";
import emailjs from 'emailjs-com';

export const Contacts = () => {
    const {language} = useAppState(LanguageState)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [message,setMessage] = useState('')

    const handleOnSubmit = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_36ooted', 'template_kebtkzu', e.target, '3CMM5c67KalKg57Dd')
          .then((result) => {
            console.log(result.text);
            setName('')
            setEmail('')
            setNumber('')
            setMessage('')
          }, (error) => {
            console.log(error.text);

          });
        e.target.reset()
      };

    return (
        <div className={css(s.Contacts)} id="contacts">
            <div className={css(s.Contacts__container)}>
                <h1>{Languages.contacts[language]}</h1>
                <div className={css(s.info)}>
                    <div className={css(s.map)}>
                        <img src="./map.png" alt="" />
                        <p>{Languages.address[language]}</p>
                    </div>
                    <div className={css(s.form)}>
                        <h2>{Languages.form[language]}</h2>
                        <form onSubmit={handleOnSubmit}>
                            <input type="text" name='from_name' placeholder={Languages.formName[language]} value={name} onChange={e=>setName(e.target.value)}/>
                            <input type="text" name='from_email' placeholder='*email' value={email} onChange={e=>setEmail(e.target.value)}/>
                            <input type="text" name='from_number' placeholder={Languages.formNumber[language]} value={number} onChange={e=>setNumber(e.target.value)}/>
                            <textarea name='message' placeholder={Languages.formComment[language]} value={message} onChange={e=>setMessage(e.target.value)}>
                            </textarea>
                            <div>
                                <button type='submit'>{Languages.formSend[language]}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}