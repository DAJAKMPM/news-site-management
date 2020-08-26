import {
  makeStyles,
  Theme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import {blueGrey, teal} from '@material-ui/core/colors';
import {TableCell} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(6),
    backgroundColor: blueGrey[800],
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  tableHeight: {
    height: 380,
  },
  chartHeight: {
    height: 400,
  },
  articlesTodayHeight: {
    height: 400,
  },
  articlesPos: {
    marginTop: 12,
  },
  chipColor: {
    backgroundColor: 'rgb(130, 202, 157)',
    color: 'white',
  },
  fontLightGreen: {
    color: teal['A200'],
  },
}));

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      color: theme.palette.common.white,
    },
  })
)(TableCell);
