import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { getRecipes, selectRecipe } from '../redux/action';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 180,
  },
  nav: {
    top: 0,
    left: 0,
    position: "fixed",
    display: "block",
    width: "100%",
    borderRadius: 0,
    padding: "15px 15px 15px 20px",
  },
  title: {
    fontFamily: "'Comfortaa', cursive",
  },
  recipeNameBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  }
});

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

const RecipesPage = ({ recipes }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const handleRecipeClick = (recipe) => {
    dispatch(selectRecipe(recipe));
    history.push('/checkout');
  }

  return (
    <>
      <Paper elevation={3} className={classes.nav}>
        <Typography variant="h4" className={classes.title}>{"Mix n' Match Restaurant"}</Typography>
      </Paper>
      <div className="rootContainer">
        <Grid container spacing={3}>
          {recipes && recipes.map(recipe => (
            <Grid item xs={12} sm={6} md={3} key={recipe.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={recipe.image}
                  title={recipe.name}
                />
                <CardContent>
                  <div className={classes.recipeNameBox}>
                    <Typography variant="h5">
                      {recipe.name}
                    </Typography>
                    <Typography variant="h5">
                      {`$${recipe.price}`}
                    </Typography>
                  </div>
                  {recipe.label && recipe.label !== recipe.category &&
                    <Chip label={recipe.label.charAt(0).toUpperCase() + recipe.label.slice(1)} style={{ marginRight: 5 }} />
                  }
                  <Chip label={recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)} />
                  <Typography style={{ marginTop: 10 }}>
                    {recipe.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleRecipeClick(recipe)}>
                    {"Buy Now"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default connect(mapStateToProps)(RecipesPage);
