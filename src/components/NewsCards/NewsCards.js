import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  
  { color: ' #0470dc', title: 'Business News', info:'This area of journalism provides news and feature articles about people, places and issues related to the business sector'},
  { color: '#1fc2d8', title: 'Crypto News', info: 'The total volume in DeFi is currently $2.28B, 6.64% of the total crypto market 24-hour volume. The volume of all stable coins is now $31.88B, which is 92.75% of the total crypto market 24-hour volume.' },
  { color: '#6078ea', title: 'International News', info: 'knowing what is happening in other countries gives people a perspective of each others ways of life and cultural differences.' },
  { color: '#6094ea', title: 'Stock market', info: ' Stock Market and Share Market Live Updates: Get all the latest share market and India stock market news and updates' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong> <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6"><br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
