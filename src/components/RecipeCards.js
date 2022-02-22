import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import { API_START } from "../state/constants";
import { getRecipes } from "../state/actionCreators";
const baseUri = "https://spoonacular.com/recipeImages/";

const useStyles = makeStyles({
  root: {
    width: 350,
    minWidth: 350,
    height: 475,
    padding: "5vh 0",
    margin: "4vh 5vh",

    top: "50%",
    left: "50%",
    backgroundColor: "#FAFAFA",
    boxShadow: "0 0 1rem #444",
  },
  media: {
    height: 140,
  },
  action: {
    minHeight: 300,
  },
  progress: {
    width: "350px",
  },
});

const Recipe = (props) => {
  const [like, setLike] = React.useState(false);
  const classes = useStyles();
  const {loading,recipe,getRecipes} = props;

  useEffect(()=>{
    getRecipes();
  },[getRecipes]);

  //this helper function will convert mins to hours and mins
  const convertMinToHoursAndMin = (min) => {
    let hours = Math.floor(min / 60);
    let mins = min - hours * 60;
    if (hours === 0) {
      return mins + " mins";
    } else {
      return `${hours} hours ${mins} mins`;
    }
  };

  //this helper function will handle like button boolean values
  const handleLikeButton = () => {
    if (like) {
      console.log(like);
      setLike(false);
    } else {
      console.log(like);
      setLike(true);
    }
  };

  if (loading) {
    return (
      <div
        className={
          "animate-fade-in-up flex flex-row flex-wrap justify-center align-start w-screen h-screen py-10 bg-gray-600"
        }
      >
        <h5 className={"text-yellow-600"}>
          Your delicious results are on their way...
        </h5>
        <LinearProgress />
      </div>
    );
  } else {
    return (
      <>
        <div
          className={
            "flex flex-row flex-wrap justify-center w-screen h-auto py-10 bg-gray-600 "
          }
        >
          {recipe &&
            recipe.map((recipe, idx) => {
              return (
                <Card key={idx} className={classes.root}>
                  <CardActionArea className={classes.action}>
                    <a href={recipe.sourceUrl}>
                      <CardMedia
                        target="_blank"
                        rel="noreferrer"
                        className={classes.media}
                        image={`${baseUri}${recipe.image}`}
                        title={recipe.title}
                      />
                    </a>
                    <CardContent>
                      <a
                        href={recipe.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {recipe.title}
                        </Typography>
                      </a>
                      <CardContent
                        className={"flex flex-row flex-wrap justify-between"}
                      >
                        <Typography
                          variant="body2"
                          color="primary"
                          component="p"
                        >
                          Servings: {recipe.servings}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="primary"
                          component="p"
                        >
                          {convertMinToHoursAndMin(recipe.readyInMinutes)}
                        </Typography>
                      </CardContent>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={"flex justify-center"}>
                    <Button className="btn btn-primary btn-block text-">
                      <a
                        href={recipe.sourceUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View Recipe
                      </a>
                    </Button>

                    <Button
                      size="small"
                      color="primary"
                      onClick={handleLikeButton}
                    >
                      Like
                      {like === false ? (
                        <ThumbUpIcon
                          color={"disabled"}
                          className="-my-24 ml-2"
                        />
                      ) : (
                        <ThumbUpIcon
                          color={"primary"}
                          className="-my-24 ml-2"
                        />
                      )}
                    </Button>
                    <Button size="small" color="primary">
                      <a
                        href={`mailto:?subject=You have to see this recipe&body=Check out this recipe ${recipe.sourceUrl}`}
                      >
                        Share
                        <ShareIcon className={"ml-2"} />
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </div>
      </>
    );
  }
};
const mapStateToProps=(state)=>({
  recipe: state.recipes,
  // loading: state.api.getRecipes.status === API_START
});
const mapDispatchToProps={
  getRecipes
};

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
