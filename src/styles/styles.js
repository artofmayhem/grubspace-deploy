import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50vw",
    alignSelf: "left",
    padding: "3vh 5vw",
    backgroundColor: "#222",
    opacity: "0.9",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    color: "white",
    backgroundColor: "#AAA",
  },
  button: {
    color: "black",
    backgroundColor: "#FFF",
    margin: "2vh 2vw",
    maxWidth: "10rem",
  },
  outerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "20vh",
  },

  label: {
    margin: "3vh 0",
    color: "white",
  },
  select: {
    backgroundColor: "#444",
    color: "#FFF",
    boxShadow: "0 0 2vh #333",
    margin: "2vh 0",
  },
}));
export default useStyles;
