import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getStories } from "../redux/actions/stories";
import { getArticles } from "../redux/actions/articles";
import { Col, Row } from "react-bootstrap";
import Logo from "../Logo";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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

const Header = ({ cat }: any) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("home");
  const [query, setQuery] = useState("");
  useEffect(() => {
    dispatch(getStories(category));
  }, [category, dispatch]);

  const handleChange = (event: any) => {
    setCategory(event.target.value);
    cat(event.target.value);
  };

  const onSearch = (event: any) => {
    if (!event.target.value) return;
    dispatch(getArticles(event.target.value));
  };
  return (
    <Row className="p-0">
      <Col>
        <Logo />
        <div className="title-main mb-3">Top Stories</div>
      </Col>
      <Col>
        <div className="ml-4">
          <div className="title-sub mb-2">Choose category: </div>
          <div className="radio ml-2">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="category"
                name="category"
                value={category}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="world"
                  control={<Radio size="small" />}
                  label="World"
                />
                <FormControlLabel
                  value="scsssience"
                  control={<Radio size="small" />}
                  label="Science"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </Col>
      <Col>
        <div>
          <Link to="/article"> Search Articles</Link>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
