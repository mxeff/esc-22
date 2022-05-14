import './Divergence.scss';
import { IState } from "./App";

const Divergence = ({ actual, prediction, taste }: IState) => {
  const divergencePrediction = prediction.reduce(
    (previousValue, currentValue, index) => {
      previousValue += Math.abs(
        index - actual.findIndex((value) => value === currentValue)
      );

      return previousValue;
    },
    0
  );

  const tastePrediction = taste.reduce((previousValue, currentValue, index) => {
    previousValue += Math.abs(
      index - actual.findIndex((value) => value === currentValue)
    );

    return previousValue;
  }, 0);

  return (
    <div className="divergence">
      <h1>Abweichung</h1>
      <h2>Tipp</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Insgesamt</strong>
            </td>
            <td>{divergencePrediction}</td>
          </tr>
          <tr>
            <td>
              <strong>Durchschnitt (&#247; 25)</strong>
            </td>
            <td>{divergencePrediction / 25}</td>
          </tr>
        </tbody>
      </table>
      <h2>Taste</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Insgesamt</strong>
            </td>
            <td>{tastePrediction}</td>
          </tr>
          <tr>
            <td>
              <strong>Durchschnitt (&#247; 25)</strong>
            </td>
            <td>{tastePrediction / 25}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Divergence;
