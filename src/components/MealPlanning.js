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
           <div className={'flex justify-center text-5xl py-32 text-white'}>
           <h3> Your Daily Meal Plan</h3>
        </div>
        <div className={'flex flex-row flex-wrap justify-center mb-20'}>
          {data.meals &&
            data.meals.map((meal, idx) => {
              return (
                <div>
                  <Card key={idx} className={classes.root}>
                    <CardActionArea className={classes.action}>
                      <a href={meal.sourceUrl}>
                        <h4>{meal.title}</h4>
                      </a>
                      <CardContent>
                        <CardContent
                          className={"flex flex-row flex-wrap justify-between"}
                        >
                          <Typography
                            variant="body2"
                            color="primary"
                            component="p"
                          >
                            Servings: {meal.servings}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="primary"
                            component="p"
                          >
                            {convertMinToHoursAndMin(meal.readyInMinutes)}
                          </Typography>
                        </CardContent>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={"flex justify-center"}>
                      <Button className="btn btn-primary btn-block text-">
                        <a href={meal.sourceUrl}>View Recipe</a>
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
       <div className={'bg-gray-500 text-white text-2xl py-10'}>
           <h4 className={'mt-4 mb-8'}>Nutritional Values</h4>
           <p className={'my-1'}>
              Calories: {data.nutrients.calories}
           </p>
           <p className={'my-1'}>
              Carbohydrates: {data.nutrients.carbohydrates} g
           </p>
           <p className={'my-1'}>
              Fat: {data.nutrients.fat} g
           </p>
           <p className={'my-1'}>
              Protein: {data.nutrients.protein} g
           </p>
       </div>
      </div>
    );
  }
}
