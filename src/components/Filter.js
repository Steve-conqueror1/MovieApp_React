import React from 'react';
import {
  Form,
  ControlLabel,
  FormControl,
  FormGroup,
  Button
} from 'react-bootstrap';

function Filter() {
  return (
    <div>
      <Form inline className="filterContainer">
        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Format</option>
            <option value="other">Movie</option>
            <option value="other">Series</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Genre</option>
            <option value="other">Horror</option>
            <option value="other">Thriller</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Year</option>
            <option value="other">1979</option>
            <option value="other">1982</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <FormGroup>
            <div className="searchArea">
              <FormControl
                type="text"
                placeholder="SearchMovie..."
                className="searchText"
              />
              <span>
                <Button bsStyle="info">Search</Button>
              </span>
            </div>
          </FormGroup>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Filter;
