import React, {useState , useEffect} from "react";
import { css } from "../../../../helpers/css";
import s from './index.module.scss'
import { useAppState } from "../../../../store/reduxStore";
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {language} = useAppState(LanguageState)
    const content:any[] = [
        {image:'bgc1.png', title:{Ru:'Наше предприятие оказывает услуги по:', En:'Our company provides services for:'}, 
        text1:{Ru:'Обработке заготовок с использованием режущего инструмента ',En:'Workpiece machining with cutting tools '},
        word1:{Ru:'(механообработка)',En:"(machining)"},
        text2:{Ru:'Улучшению характеристик изделий путем нагревания и выдерживания при определенной температуре ',En:'Improving the characteristics of products by heating and holding at a certain temperature '},
        word2:{Ru:'(термообработка)', En:'(heat treatment)'}
        },
        {image:'bgc2.png', 
        title:{Ru:'ООО «Уральский Кузнечный Завод»', En:'Urals Blacksmith Factory LLC'}, 
        text1:{Ru:'Стремительно развивающиеся кузнечно-прессовое производство со штатом высококвалифицированных сотрудников выполнит заказ по изготовлению поковок и штамповок!',En:'Rapidly developing forging and pressing production with a staff of highly qualified employees will fulfill orders for the production of forgings and stampings!'},
        text2:null,
        word1:null,
        word2:null
        },
    ]
    const images:string[] = ['bgc1.png','bgc1.png','bgc1.png']
    const titleList:any[] = [
        {Ru:'Наше предприятие оказывает услуги по:', En:'Our company provides services for:'}
    ] 
    const textList:any[] = [
        {Ru:'Обработке заготовок с использованием режущего инструмента (механообработка)', En:'Our company provides services for:'}
    ] 

    
    const next = () => {
        if (currentIndex < (content.length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }


    return (
        <div className={css(s.Carousel)}>
            <div className={css(s.wrapper)}>
                <div className={css(s.wrapper__content)}>
                    <div
                        className={css(s.content)}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {content.map((item, key) => (
                            <div key={key}  className={css(s.info)}>
                                <img src={item.image} />
                                <div className={css(s.infoText , currentIndex==1 && s.widthContent)}>
                                    <h1 className='series'>{item.title[language]}</h1>
                                    <p>{item.text1[language]} {item.word1!==null && <span>{item.word1[language]}</span>}</p>
                                    {item.text2 !== null && <p>{item.text2[language]} {item.word2!==null && <span>{item.word2[language]}</span>}</p> }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={css(s.sliderDown)}>
                    <div className={css(s.sliderContent)}>
                        <div className={css(s.sliredItem)} style={currentIndex == 0 ? { backgroundColor: '#D6EAEC' } : {}} onClick={e => setCurrentIndex(0)}></div>
                        <div className={css(s.sliredItem)} style={currentIndex == 1 ? { backgroundColor: '#D6EAEC' } : {}} onClick={e => setCurrentIndex(1)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}