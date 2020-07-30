import './mystyle.css';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardData from './CardData';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    marginLeft: 35,
    marginTop: 190
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <GridList cols={3}>
      {
        props.searchresults.map((data, i) =>(
<GridListTile  key={i} style={{ height: 'auto' }}>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">  
            <MoreVertIcon />
          </IconButton>
        }
        title={'Source: ' + data.source}
        subheader={'Summary: ' + data.title}
      />
      <CardMedia
        className={classes.media}
        image='https://www.hirehop.com/wp-content/uploads/2018/09/Microsoft-365-Header.png'
        title='Dish'
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {'Last modified: ' + data.lastModified}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
         
          onClick={() => handleExpandClick(i)}
          aria-expanded={expandedId === i}
          aria-label= 'show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
      <Typography paragraph>{'URL: ' + data.url}</Typography>
          <Typography paragraph>
            {'Owner: ' + data.owner}
          </Typography>
          <Typography paragraph>
            {'Details: ' + data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
          </GridListTile>
        ))
      }
              
    </GridList>
    
  );
}
