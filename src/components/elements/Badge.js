import React from "react";

function Badge(props) {
  const faIcon = "fa fa-1x " + props.faIcon;
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag">{props.text}</span>
        <span className="tag">
          <i className={faIcon}></i>
        </span>
      </div>
    </div>
  );
}

export default Badge;
