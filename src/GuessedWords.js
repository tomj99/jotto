import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const GuessedWords = (props) => {
  const classes = useStyles();
  let contents = "";
  let message = "";
  if (props.guessedWords.length === 0) {
    message = (
      <span data-test="component-guess-instructions">
        Try to guess the secret word!
      </span>
    );
  } else {
    contents = (
      <TableBody data-test="guessed-words">
        {props.guessedWords.map((row) => (
          <StyledTableRow key={row.guessedWord}>
            <TableCell data-test="guessed-word" scope="row">
              {row.guessedWord}
            </TableCell>
            <TableCell align="left">{row.letterMatchCount}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    );
  }
  return (
    <TableContainer data-test="component-guessed-words" component={Paper}>
      {message}
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>GuessedWord</StyledTableCell>
            <StyledTableCell>LetterMatchCount</StyledTableCell>
          </TableRow>
        </TableHead>
        {contents}
      </Table>
    </TableContainer>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
