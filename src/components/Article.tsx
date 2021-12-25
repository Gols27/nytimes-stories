import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getArticles } from "../redux/actions/articles";
import { Col, Row, Card } from "react-bootstrap";
import Logo from "../Logo";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CreatePagination from "./Pagination";
import "./Article.scss";

interface RootState {
  articles: {
    articles: Array<{
      lead_paragraph: string;
      headline: any;
      web_url: string;
    }>;
    loading: boolean;
    error: { message: string };
    searches: Array<string>;
  };
}

const Article = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [currPage, setCurrPage] = React.useState(1);
  const loading = useSelector((state: RootState) => state.articles.loading);
  const articles = useSelector((state: RootState) => {
    console.log(state);
    return state.articles.articles;
  });
  const error = useSelector((state: RootState) => state.articles.error);
  const searches = useSelector((state: RootState) => state.articles.searches);

  const onSearch = (event: any, currentPage: number = 1) => {
    const evt = event?.target?.value || query;
    if (!evt) return;

    dispatch(getArticles(evt, currentPage));
    setCurrPage(currentPage);
    if (event?.target?.value) setQuery(event.target.value);
  };
  return (
    <div>
      {/* //<form className="inline-icon search-width" onSubmit={e => onSearch(e, 1)}> */}
      <i className="fa fa-search icon-color"></i>
      <input
        className="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search Article"
        onBlur={e => onSearch(e, 1)}
      />
      {/* <button onClick={e => onSearch(e, 1)}>Search Article</button> */}
      {/* //</form> */}

      <div>
        <label>Your last 5 searches: </label>
        {searches &&
          searches.length > 0 &&
          searches.map((item: any, index: number) => {
            return <div>{item}</div>;
          })}
      </div>
      <div className="card-wrapper">
        {loading && <div>Loading...</div>}
        {!error &&
          articles.length > 0 &&
          !loading &&
          articles.map(article => (
            <Card>
              <Card.Body>
                <Card.Title>{article.headline.main}</Card.Title>
                <Card.Text>{article.lead_paragraph}</Card.Text>
                <a href={article.web_url} target="_blank">
                  Read More
                </a>
              </Card.Body>
            </Card>
          ))}
        {error && <div>Failed to load data for {query} article.</div>}
      </div>
      <CreatePagination
        totPages={20}
        currentPage={currPage}
        pageClicked={(ele: number) => {
          onSearch(null, ele);
        }}
      >
        {/* <ul>
        {tagList.map((ele, ind) => {
          return <li key={ele + ind}>{ele}</li>;
        })}
      </ul> */}
      </CreatePagination>
      {/* <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination> */}
    </div>
  );
};

export default Article;
