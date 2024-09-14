import { Link } from "react-router-dom";
import { translatePage } from "../utils/quizFunctions";

interface Props {
  questionArray: string[];
  rightAnswers: number;
  badAnswers: number;
}

const ResultsPage = ({
  questionArray,
  rightAnswers,
  badAnswers,
}: Props): JSX.Element => {
  return (
    <div
      className="section section_end"
      style={{ transform: translatePage(questionArray.length) }}
    >
      <div className="main-page_header">
        <div className="end_results-container">
          <h1 className="quiz_end">Výsledek</h1>
          <h3 className="quiz_results right_answers">Správných odpovědí:</h3>
          <h3 className="quiz_results right_answers">{rightAnswers}</h3>
          <h3 className="quiz_results wrong_answers">Špatných odpovědí:</h3>
          <h3 className="quiz_results wrong_answers">{badAnswers}</h3>
        </div>
        <Link style={{ height: "0" }} to={"/"}>
          <button className="btn_exit">Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
