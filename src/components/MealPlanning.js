//import React from 'react';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: 375,
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

export default function MealPlanning(props) {
  const [like, setLike] = React.useState(false);
  const { data } = props;
  const classes = useStyles();
  console.log("1. Data from Meal Planning", data);

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

  if (data.length === 0) {
    return (
      <div className="row bg-white">
        <div className="col-md-12"></div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center py-20">
        <div className={"flex justify-center text-5xl py-32 text-white"}>
          <h3> Your Daily Meal Plan</h3>
        </div>
        <div className={"flex flex-row flex-wrap justify-center mb-20"}>
          {data.meals &&
            data.meals.map((meal, idx) => {
              return (
                <div>
                  <Card
                    key={idx}
                    className={classes.root}
                    style={{
                      backgroundColor: "#4B5563",
                      boxShadow: "0 0 2rem black",
                    }}
                  >
                    <CardActionArea
                      className={classes.action}
                      style={{ backgroundColor: "#9CA3AF" }}
                    >
                      <CardMedia
                        className={"bg-white py-10 text-black text-2xl"}
                      >
                        <a
                          href={meal.sourceUrl}
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          <h4>{meal.title}</h4>
                        </a>{" "}
                      </CardMedia>
                      <CardContent>
                        <CardContent
                          className={"flex flex-row flex-wrap justify-between"}
                        >
                          <Typography variant="body2" component="p">
                            Servings: {meal.servings}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {convertMinToHoursAndMin(meal.readyInMinutes)}
                          </Typography>
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={"flex justify-center"}>
                      <Button className="btn btn-primary btn-block">
                        <a
                          className={"text-white"}
                          href={meal.sourceUrl}
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          View Recipe
                        </a>
                      </Button>

                      <Button
                        size="small"
                        className={"text-white"}
                        onClick={handleLikeButton}
                      >
                        <p className={"text-white"}>Like</p>
                        {like === false ? (
                          <ThumbUpIcon
                            color={"disabled"}
                            className="-my-24 ml-2"
                          />
                        ) : (
                          <ThumbUpIcon className="-my-24 ml-2" />
                        )}
                      </Button>
                      <Button size="small">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className={"text-white"}
                          href={`mailto:?subject=You have to see this recipe&body=Check out this recipe ${meal.sourceUrl}`}
                        >
                          Share
                          <ShareIcon className={"ml-2"} />
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
        </div>
        <div className={"bg-gray-500 text-white text-2xl py-10"}>
          <h4 className={"mt-4 mb-8"}>Nutritional Values</h4>
          <p className={"my-1"}>Calories: {data.nutrients.calories}</p>
          <p className={"my-1"}>
            Carbohydrates: {data.nutrients.carbohydrates} g
          </p>
          <p className={"my-1"}>Fat: {data.nutrients.fat} g</p>
          <p className={"my-1"}>Protein: {data.nutrients.protein} g</p>
        </div>
      </div>
    );
  }
}
