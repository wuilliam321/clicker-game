export default interface GameProps {
  name: string;
  score: number;
  setPlayerNameHandler: (name: string) => void;
  setPlayerScoreHandler: () => void;
}
