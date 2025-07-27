import React, { useContext } from "react";
import culturePage from "../../../../assets/images/cultureImg.png";
import money from "../../../../assets/images/culturePage/culture page/Money.png";
import moneybg from "../../../../assets/images/culturePage/culture page/moneybg.png";
import axios from "axios";
import { TravelContext } from "../../../context/context";
import "./Currency.scss";

const currencyy = {
  en: {
    id: 1,
    of: "National currency of Kyrgyzstan",
    desc: `The national currency of Kyrgyzstan is the som, its
     international designation is KGS. The resolution on the 
     introduction of the national currency was adopted by the
      Parliament of Kyrgyzstan on May 10, 1993. Kyrgyzstan
       became the second CIS country after Russia to adopt its
        own national currency after the collapse of the Soviet
         Union.`,
    desc2: `The national currency of Kyrgyzstan is represented by ten
 denominations of banknotes: 1, 5, 10, 20, 50, 100, 200, 500,
  1000 and 5000 soms and coins of 10 and 50 tyiyns, 1, 3 and
   5 soms. One som is equal to 100 tyiyns, however, in reality,
    tyiyns are used quite rarely. Sometimes 50 tyiyn come
     across, but most often the smallest unit is 1 som.
`,
    desc3: `The 20-som banknote depicts the famous akyn Togolok
 Moldo, as well as the 15th century caravanserai Tash Rabat,
  which is located in Naryn. The banknote of 50 soms is
   dedicated to the leader and ruler of Kurmanjan-datka; in
    addition, a minaret and a mausoleum in Uzgen are
     depicted here. On the 100-som bill you can see another
      famous akyn - Toktogul Satylganov, as well as the Toktogul
       hydroelectric power station named after him. One of the 
       greatest poets of the 20th century Alykul Osmonov and a
        panorama of Lake Issyk-Kul are on the banknote of 200
         soms.`,
    desc4: `The 500-som banknote depicts the manaschi Sayakbay
 Karalayev and the Manas mausoleum in Talas. Yusuf 
 Balasagun, depicted on the banknote of 1000 soms, was a 
 famous poet during the reign of the Karakhanids, on the 
 banknote he is accompanied by Sulaiman-Too, a sacred
  mountain included in the UNESCO World Heritage List.
   On the largest denomination of 5,000 soms there is a
    portrait of actor Suimenkul Chokmorov and Ala-Too
     Square in Bishkek.
`,
    desc5: `The economy of Kyrgyzstan is mostly cash driven, but
 ATMs can be found in major cities. Banks and exchange
  offices can change any common currency, but it is 
  desirable that the banknotes are new and legible. Banks in 
  Kyrgyzstan are open from 9.00-9.30 to 17.00-17.30 from
   Monday to Friday, the day off is Saturday and Sunday.
    Exchange offices are most often open around the clock.`,
    desc6: `Moscow City Council is the busiest currency exchange
 area in Bishkek, where travelers can count on a good
  exchange rate at any hour. Outside of Bishkek, ATMs and
   exchange offices are less common. Going to more remote
    regions of Kyrgyzstan, it is better to make sure that you
     have enough money with you`,
    name: " Currency",
    joy: `The nomadic way of life is reflected in the Kyrgyz clothes,
the features of various regions are visible. Natural
materials prevail: wool, felt, leather, coarse fabrics. The
design uses ornaments and themes inspired by nature
and tribal traditions.`,
  },

  ru: {
    of: "Национальная валюта Кыргызстана",
    desc: `Национальной валютой Кыргызстана является сом, его международное обозначение — KGS. Постановление о введении национальной валюты было принято Парламентом Кыргызстана 10 мая 1993 года. Кыргызстан стал второй страной СНГ после России, которая ввела собственную национальную валюту после распада Советского Союза.`,
    desc2: `Национальная валюта Кыргызстана представлена десятью номиналами банкнот: 1, 5, 10, 20, 50, 100, 200, 500, 1000 и 5000 сомов, а также монетами номиналом 10 и 50 тыйынов, 1, 3 и 5 сомов. Один сом равен 100 тыйын, однако на практике тыйыны используются довольно редко. Иногда встречаются монеты в 50 тыйын, но чаще всего наименьшей единицей является 1 сом.
`,
    desc3: `На банкноте номиналом 20 сом изображён известный акын Тоголок Молдо, а также караван-сарай XV века Таш-Рабат, расположенный в Нарыне. Банкнота в 50 сом посвящена руководителю и правительнице Курманжан-датке; кроме того, здесь изображены минарет и мавзолей в Узгене. На банкноте в 100 сом можно увидеть другого известного акына — Токтогула Сатылганова, а также Токтогульскую гидроэлектростанцию, названную в его честь. Один из величайших поэтов XX века Алыкул Осмонов и панорама озера Иссык-Куль изображены на банкноте в 200 сом.`,
    desc4: `На банкноте номиналом 500 сом изображён манасчи Саякбай Каралаев и мавзолей Манаса в Таласе. Юсуф Баласагун, изображённый на банкноте в 1000 сом, был известным поэтом во времена Караханидов; на банкноте он сопровождается изображением Сулейман-Тоо — священной горы, включённой в список Всемирного наследия ЮНЕСКО. На самой крупной банкноте в 5000 сом изображён портрет актёра Суйменкула Чокморова и площадь Ала-Тоо в Бишкеке.
`,
    desc5: `Экономика Кыргызстана в основном ориентирована на наличные расчёты, однако банкоматы можно найти в крупных городах. Банки и обменные пункты принимают любые распространённые валюты, но желательно, чтобы банкноты были новыми и хорошо читаемыми. Банки в Кыргызстане работают с понедельника по пятницу с 9:00–9:30 до 17:00–17:30, выходные — суббота и воскресенье. Обменные пункты чаще всего работают круглосуточно.`,
    desc6: `Район Московского городского совета в Бишкеке — самое оживлённое место обмена валюты, где путешественники могут рассчитывать на выгодный курс в любое время суток. За пределами Бишкека банкоматы и обменные пункты встречаются реже. Отправляясь в более отдалённые регионы Кыргызстана, лучше заранее убедиться, что у вас достаточно наличных денег.`,
    name: "Валюта",
    joy: `Кочевой образ жизни отражается в кыргызской одежде, заметны особенности различных регионов. Преобладают натуральные материалы: шерсть, войлок, кожа, грубые ткани. В дизайне используются орнаменты и мотивы, вдохновлённые природой и племенными традициями.`,
  },
  ky: {
    desc: `Кыргызстандын улуттук валютасы — сом, анын эл аралык кыскартмасы — KGS. Улуттук валютаны киргизүү жөнүндө чечим Кыргыз Республикасынын Жогорку Кеңеши тарабынан 1993-жылдын 10-майында кабыл алынган. Совет Союзу таркап кеткенден кийин Кыргызстан Россиядан кийинки экинчи КМШ өлкөсү болуп, өз улуттук валютасын киргизген.

`,
    desc2: `Кыргызстандын улуттук валютасы он номиналдуу банкноттор менен берилет: 1, 5, 10, 20, 50, 100, 200, 500, 1000 жана 5000 сом, ошондой эле 10 жана 50 тыйын, 1, 3 жана 5 сомдук монеталар бар. Бир сом 100 тыйынга барабар, бирок чындыгында тыйындар сейрек колдонулат. Кээде 50 тыйын кездешет, бирок эң кичи бирдик көбүнчө 1 сом болуп саналат.
`,
    desc3: `20 сомдук банкнотада белгилүү акын Тоголок Молдо жана Нарын шаарындагы XV кылымдагы Таш Рабат кербен сарайы сүрөттөлгөн. 50 сомдук банкнота Курманжан датканын жетекчилигине жана башкаруусуна арналган; ошондой эле Өзгөндөгү мунара жана мавзолей да көрсөтүлгөн. 100 сомдук купюрада белгилүү акын Токтогул Сатылганов менен анын ысымын алган Токтогул гидроэлектростанциясы тартылган. 200 сомдук банкнотада XX кылымдын улуу акыны Алыкул Осмонов жана Ысык-Көлдүн панорамасы чагылдырылган.`,
    desc4: `500 сомдук банкнотада манасчы Саякбай Каралаев жана Таластагы Манастын мавзолейи сүрөттөлгөн. 1000 сомдук купюрада Караханиддер доорунда белгилүү болгон акын Жусуп Баласагын чагылдырылган, ал банкнотада ЮНЕСКОнун Бүткүл дүйнөлүк мурастарына кирген сыйлуу тоо Сүлейман-Тоо менен кошо көрсөтүлгөн. 5000 сомдук эң чоң номиналдуу банкнотто белгилүү актёр Сүймөнкул Чокморовдун портрети жана Бишкектеги Ала-Тоо аянты сүрөттөлгөн.
`,
    desc5: `Кыргызстандын экономикасы негизинен нак акчага негизделет, бирок ири шаарларда банкоматтар бар. Банктар жана акча алмаштыруучу жайлар ар кандай кеңири таралган валюталарды алмаштыра алышат, бирок купюралар жаңы жана таза болушу сунушталат. Кыргызстандагы банктар дүйшөмбүдөн жумага чейин саат 9:00–9:30дон 17:00–17:30го чейин иштешет, дем алыш күндөрү — ишемби жана жекшемби. Акча алмаштыруучу жайлар көбүнчө күнү-түнү ачык болот.`,
    desc6: `Бишкектеги Шаардык Кеңештин аймагы — валютаны алмаштырууда эң жандуу жер, саякатчылар каалаган убакта жакшы курс менен алмаштыра алышат. Бишкектен тышкары банкоматтар жана акча алмаштыруучу жайлар азыраак кездешет. Кыргызстандын алыстагы аймактарына бара жатканда жетиштүү өлчөмдө акчаңыз бар экенине алдын ала ишенип алуу жакшы.`,
    name: "Валюта",
    joy: `Көчмөн жашоо образы кыргыз кийимдеринен айкын көрүнөт, ар кандай аймактардын өзгөчөлүктөрү байкалып турат. Жаратылыштан алынган материалдар басымдуулук кылат: жүн, кийиз, тери жана калын кездемелер. Кийимдердин жасалгасында жаратылыштан жана уруулар салтынан шыктанган оймо-чиймелер жана темалар колдонулат.`,
    of: "Кыргызстандын улуттук валютасы",
  },
};

const Currency = () => {
  const { culture, language } = useContext(TravelContext);

  const currency = culture.find((el) => el.id === 4);
  const de = currencyy[language];
  console.log(de, "descc");

  return (
    <div id="currency">
      <div className="container">
        <div className="currency">
          <div
            className="currency--block1"
            style={{
              backgroundImage: `url(${culturePage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1>{de.name}</h1>
            <p>{de.joy}</p>
          </div>
          <div className="currency--block2">
            <div className="currency--block2__text">
              <div
                className="currency--block2__text--imgg"
                style={{
                  background: `url(${moneybg}) `,
                }}
              >
                <img src={money} alt="img" />
              </div>

              <p>
                <span
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  {de.of}
                </span>{" "}
                <br />
                <br />
                {de.desc} <br /> <br />
                {de.desc2}
                <br /> <br />
                {de.desc3}
                <br /> <br />
                {de.desc4}
                <br /> <br />
                {de.desc5}
                <br /> <br />
                {de.desc6}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
