import "./Participant.scss";
import { TParticipant } from "./data";
import Twemoji from "react-twemoji";

interface IProps {
  index: number;
  isDragging: boolean;
}

const Participant = ({
  artist,
  flag,
  id,
  index,
  isDragging,
  song,
}: TParticipant & IProps) => {
  const className = isDragging
    ? "participant participant--is-dragging"
    : "participant";

  return (
    <div className={className}>
      <span className="participant__position">
        {`${index + 1}`.padStart(2, "0")}
      </span>
      <span className="participant__starting-position">
        #{`${id}`.padStart(2, "0")}
      </span>
      <span className="participant__flag">
        <Twemoji>{flag}</Twemoji>
      </span>
      <span className="participant__song-and-artist">
        <span className="participant__song">{song}</span>
        <span className="participant__artist">{artist}</span>
      </span>
    </div>
  );
};

export default Participant;
