import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { getStories } from "./redux/actions/stories";
import { Col, Container, Row } from "react-bootstrap";
import PageWrapper from "./PageWrapper";
import Header from "./components/Header";
import "./App.scss";
import Article from "./components/Article";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Container className="m-0" style={{ display: "contents" }}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/article" component={Article} />
            <Route path="**" component={Homepage} />
          </Switch>
        </Container>
      </PageWrapper>
    </Router>
  );
};

export default App;
