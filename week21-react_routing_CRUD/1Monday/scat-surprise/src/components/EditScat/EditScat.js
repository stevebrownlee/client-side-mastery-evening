import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scats';

import './EditScat.scss';

const defaultScat = {
  title: '',
  color: '',
  origin: '',
  date: '',
  status: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    editScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingle(scatId)
      .then(scat => this.setState({ editScat: scat }))
      .catch(err => console.error('could not find scat to edit', err));
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.editScat };
    tempScat[name] = e.target.value;
    this.setState({ editScat: tempScat });
  }

  titleChange = e => this.formFieldStringState('title', e);

  colorChange = e => this.formFieldStringState('color', e);

  originChange = e => this.formFieldStringState('origin', e);

  dateChange = e => this.formFieldStringState('date', e);

  statusChange = e => this.formFieldStringState('status', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = this.state.editScat;
    const scatId = this.props.match.params.id;
    scatData.putRequest(scatId, saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('did not save scat', err));
  }

  render() {
    const { editScat } = this.state;
    return (
      <div className="editScat col">
        <h1>Add a edit Scat</h1>
        <form onSubmit={this.formSubmit} className="col-8 offset-2">
          <div className="row">
            <div className="col form-group">
              <label htmlFor="title" className="col-form-label">Title:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="title"
                placeholder="Found a big one!"
                value={editScat.title}
                onChange={this.titleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="color" className="col-form-label">Color:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="color"
                placeholder="brown"
                value={editScat.color}
                onChange={this.colorChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="origin" className="col-form-label">Origin:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="origin"
                placeholder="Bear"
                value={editScat.origin}
                onChange={this.originChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="date" className="col-form-label">Date:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="date"
                placeholder="10/12/2018"
                value={editScat.date}
                onChange={this.dateChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="status" className="col-form-label">Status:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="status"
                placeholder="clumpy"
                value={editScat.status}
                onChange={this.statusChange}
              />
            </div>
          </div>
          <button className="col-xs-6 btn btn-danger col-xs-offset-3">Save Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
