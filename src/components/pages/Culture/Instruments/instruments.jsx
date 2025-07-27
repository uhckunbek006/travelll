import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import { TravelContext } from "../../../context/context";

const inst = {
  en: {
    text: `Kyrgyz music is notable for being in tune with nature and life in
the mountains. The texts of many songs tell about the everyday
life of nomads, and even in compositions where there are no
words, the corresponding mood is subtly conveyed. There are
many musical instruments in Kyrgyzstan.`,
    name: "National instruments",
  },
  ru: {
    text: `Киргизская музыка отличается гармонией с природой и жизнью в горах. В текстах многих песен рассказывается о повседневной жизни кочевников, а даже в тех произведениях, где нет слов, тонко передаётся соответствующее настроение. В Кыргызстане существует множество музыкальных инструментов.`,
    name: " Национальные инструменты",
  },
  ky: {
    text: `Кыргыз музыкасы табият жана тоолордогу жашоо менен айкалышып турганы менен айырмаланат. Көптөгөн ырлардын текстеринде көчмөндөрдүн күнүмдүк турмушу баяндалат, ал эми сөзсүз чыгармаларда да ошол маанай назик түрдө жеткирилет. Кыргызстанда музыкалык аспаптардын көп түрү бар.`,
    name: "Улуттук аспаптар ",
  },
};

const Instrument = () => {
  const { culture, instruments, language } = useContext(TravelContext);
  // const instrument = games.filter(
  // (el) => el.id === 20 || el.id === 21 || el.id === 22 || el.id === 23
  // );

  const t = inst[language];

  return (
    <div id="instrument">
      <div className="container">
        <div className="instrument">
          <div
            className="instrument--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>{t.name}</h1>
            <p>{t.text}</p>
          </div>
          {instruments.map((el) => (
            <div className="instrument--block2">
              <div className="instrument--block2__text">
                {/* <img
                  src="https://static.vecteezy.com/system/resources/previews/035/199/224/non_2x/ai-generated-blue-flower-isolated-on-transparent-background-free-png.png"
                  alt="img"
                /> */}
                <img src={el.image} alt="" />
                <p>
                  <span>{el.culture_name}</span> <br /> <br />
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instrument;
