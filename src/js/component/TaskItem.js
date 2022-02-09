import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";
export const TaskItem = (props) => {
	return <li i={key}>{props.item}</li>;
};
TaskItem.propTypes = {
	item: PropTypes.string,
};
