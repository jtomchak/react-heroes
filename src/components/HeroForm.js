import React from "react";

const HeroForm = props => {
  return (
    <div className="col-md-6 col-sm-12">
      <h2 style={{ textAlign: "center" }}>{props.selectedHero.name}</h2>
      <form
        className="form-horizontal"
        style={{ width: "60%", padding: "25px" }}
        onSubmit={e => props.submitForm(e)}
      >
        <div className="form-group">
          <label className="control-label">ID: </label>
          {props.selectedHero.id}
        </div>
        <div className="form-group">
          <label className="control-label">Hero Name: </label>
          <input
            className="form-control"
            type="text"
            value={props.selectedHero.name}
            onChange={e => props.inputChange(e)}
          />
        </div>
        <input className="button btn btn-info" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HeroForm;
