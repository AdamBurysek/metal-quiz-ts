import { useEffect, useState } from "react";
import {
  getImageUrl,
  slidePage,
  slidesWidth,
  translatePage,
} from "../utils/quizFunctions";
import { shuffleAnswers, shuffleQuestions } from "../utils/randomizeQuiz";
import { FinalArray } from "../utils/types";
import ResultsPage from "./resultsPage";

const GamePage = () => {
  let [finalArray, setFinalArray] = useState<FinalArray[]>([]);
  let [count, setCount] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [clicked, setClicked] = useState("");
  let [rightAnswers, setRightAnswers] = useState(0);
  let [badAnswers, setBadAnswers] = useState(0);

  const questionArray = ["Hliník", "Měď", "Nikl", "Olovo", "Titan", "Železo"];

  function setQuestions() {
    let answer: string;
    let questionArrayCopy = [];
    let newArray = [];
    let shuffledQuestions = [];
    shuffledQuestions = shuffleQuestions(questionArray);
    for (let i = 0; i < questionArray.length; i++) {
      questionArrayCopy = [...shuffledQuestions];
      answer = questionArrayCopy[i];
      let shuffle = shuffleAnswers(questionArrayCopy, answer);
      newArray.push({
        answer: answer.toString(),
        questions: shuffle,
        image: answer
          .toString()
          .toLowerCase()
          .replace(/[ ]/g, "_")
          .replace(/[á]/g, "a")
          .replace(/[č]/g, "c")
          .replace(/[ď]/g, "d")
          .replace(/[é]/g, "e")
          .replace(/[ě]/g, "e")
          .replace(/[í]/g, "i")
          .replace(/[ň]/g, "n")
          .replace(/[ó]/g, "o")
          .replace(/[ř]/g, "r")
          .replace(/[š]/g, "s")
          .replace(/[ť]/g, "t")
          .replace(/[ú]/g, "u")
          .replace(/[ů]/g, "u")
          .replace(/[ý]/g, "y")
          .replace(/[ž]/g, "z"),
        id: i,
      });
    }
    setFinalArray(newArray);
  }

  useEffect(() => {
    setQuestions();
    // eslint-disable-next-line
  }, []);

  const onSubmit = (btn: string, pageId: FinalArray) => {
    setClicked(btn);
    if (btn === pageId.answer) {
      rightAnswers++;
      setRightAnswers(rightAnswers);
    }
    if (btn !== pageId.answer) {
      badAnswers++;
      setBadAnswers(badAnswers);
    }
    setShowResult(true);
    setTimeout(pageSwitch, 1500);
  };

  const pageSwitch = () => {
    count--;
    if (count * -1 > questionArray.length - 1) {
      count = questionArray.length * -1;
    }
    setShowResult(false);
    setCount(count);
  };

  return (
    <div>
      <div className="screen_crop">
        <div
          className="slide"
          style={{
            width: slidesWidth(questionArray.length + 1),
            left: slidePage(count),
          }}
        >
          {finalArray.map((page, index) => {
            return (
              <div
                className="section"
                key={index}
                style={{ transform: translatePage(page.id) }}
              >
                <div className="grid-container">
                  <div className="img_container">
                    <img
                      className="q_img"
                      src={getImageUrl(finalArray[page.id])}
                      alt=""
                    />
                  </div>
                  <div className="btn_container">
                    <ul>
                      {finalArray[page.id].questions.map((btn) => {
                        return (
                          <li key={btn}>
                            <button
                              disabled={showResult ? true : false}
                              key={btn}
                              onClick={() => onSubmit(btn, finalArray[page.id])}
                              // prettier-ignore
                              className={
                                showResult === true && btn === finalArray[page.id].answer && btn === clicked
                                  ? "q_button btn_right" // COMMENT OR DELETE THIS CODE FOR SHOW RIGHT ANSWERS
                                  : showResult === true && btn !== finalArray[page.id].answer && btn === clicked
                                  ? "q_button btn_wrong"
                                  : showResult === true && btn !== clicked
                                  ? "q_button btn_blur"
                                  : "q_button"
                              }
                            >
                              {btn}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          <ResultsPage
            questionArray={questionArray}
            rightAnswers={rightAnswers}
            badAnswers={badAnswers}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
