import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchQuote } from "../store/actions/quoteActions";

const KanyeQuote = (props) => {
  useEffect(() => {
    // call an action creator
    props.fetchQuote();
  }, []);
  //   if (props.isFetching) {
  //     return <Loader />;
  //   }
  return (
    <div>
      <h1>Kanye Quotes </h1>
      {props.isFetching && (
        <Loader
          type="puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {props.quote && <h3>"{props.quote}"</h3>}
      {props.error && <p>{props.error}</p>}
      <button onClick={props.fetchQuote}>Fetch a new quote</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quotesReducer.quote,
    isFetching: state.quotesReducer.isFetching,
    error: state.quotesReducer.error,
  };
};
export default connect(mapStateToProps, { fetchQuote })(KanyeQuote);
