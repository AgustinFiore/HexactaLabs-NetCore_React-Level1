import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";

const renderToolbar = ({ value }) => {
  let viewButton = (
    <Link className="producttype-list__button" to={`/producttype/view/${value}`}>
      <FaSearch className="producttype-list__button-icon" />
    </Link>
  );

  let editButton = (
    <Link className="producttype-list__button" to={`/producttype/update/${value}`}>
      <FaEdit className="producttype-list__button-icon" />
    </Link>
  );

  let removeButton = (
    <Link className="producttype-list__button" to={`/producttype/remove/${value}`}>
      <FaTrash className="producttype-list__button-icon" />
    </Link>
  );

  return (
    <span>
      {viewButton} {editButton} {removeButton}
    </span>
  );
};

const HeaderComponent = props => {
  return (
	<h2 
	className="tableHeading"
    >
      {props.title}
    </h2>
  );
};

HeaderComponent.displayName = "HeaderComponent";

const columns = [
  {
    Header: <HeaderComponent title="Iniciales" />,
    accessor: "initials",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Descripción" />,
    accessor: "description",
    Cell: props => props.value
  },
  {
    Header: <HeaderComponent title="Acciones" />,
    accessor: "id",
    Cell: renderToolbar
  }
];

renderToolbar.propTypes = {
  value: PropTypes.string.isRequired
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default columns;
