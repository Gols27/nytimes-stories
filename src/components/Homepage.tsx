import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import "../App.scss";

interface RootState {
  stories: {
    stories: Array<{
      section: string;
      abstract: string;
      created_date: string;
      title: string;
    }>;
    loading: boolean;
    error: { message: string };
  };
}

const Homepage = () => {
  const [category, setCategory] = useState("home");
  const loading = useSelector((state: RootState) => state.stories.loading);
  const stories = useSelector((state: RootState) => {
    console.log(state);
    return state.stories.stories;
  });
  const error = useSelector((state: RootState) => state.stories.error);

  return (
    <>
      <Header cat={setCategory} />
      {loading && <div>Loading...</div>}

      {!error &&
        stories.length > 0 &&
        !loading &&
        stories.map(story => (
          <Row>
            <Col sm>{story.section}</Col>
            <Col sm>{story.abstract}</Col>
            <Col sm>
              {format(new Date(story.created_date), "dd/MMM/yyyy HH:mm")}
            </Col>
            <Col sm>{story.title}</Col>
          </Row>
        ))}
      {error && <div>Failed to load data for {category} stories.</div>}
    </>
  );
};

export default Homepage;
