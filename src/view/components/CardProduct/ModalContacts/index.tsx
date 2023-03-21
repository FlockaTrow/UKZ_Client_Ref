import React from "react";
import { css } from "../../../../helpers/css";
import s from './index.module.scss'
import { useClickOutside } from "../../../../helpers/customHook";
import { useAppState } from "../../../../store/reduxStore";
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";

export const ModalContacts = ({ flag, setFlagShow }: { flag: boolean, setFlagShow: Function }) => {
    const {language} = useAppState(LanguageState)

    useClickOutside(() => setFlagShow(false), [`modal`])
    return (
        <div className={css(s.ModalContacts, !flag && s.showNone)}>
            <div id="modal" className={css(s.form)}>
                <h2>{Languages.form[language]}</h2>
                <form>
                    <input type="text" placeholder={Languages.formName[language]} />
                    <input type="text" placeholder='*email' />
                    <input type="text" placeholder={Languages.formNumber[language]} />
                    <textarea placeholder={Languages.formComment[language]}>
                    </textarea>
                    <div>
                        <button>{Languages.formSend[language]}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}