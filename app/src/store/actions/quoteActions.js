import axios from "axios";
// thunks
//  redux is synchronous
// we need to perform an async operation

export const fetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });
    axios
      .get("https://api.kanye.rest")

      .then((res) => {
        console.log(res);
        //   res.data.quote
        dispatch({
          type: "FETCH_QUOTE_SUCCESS",
          payload: res.data.quote,
        });
      })
      .catch((err) => console.log(err.response));
  };
};
