import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Spinner from "../../spinner/spinner";
import { Link } from "react-router-dom";
import * as URL from "../../../router/url";
import { updateColors } from "../../../store/action_creators";

// Red
// Pink
// Yellow
// Grey
// Blue
// Black
// Green
Sidecolors.propTypes = {
  isLoading: PropTypes.bool,
  updateColors: PropTypes.func,
  colors: PropTypes.string,
};

let colorList = [
  {
    id: 1,
    name: "red",
  },
  {
    id: 2,
    name: "pink",
  },
  {
    id: 3,
    name: "yellow",
  },
  {
    id: 4,
    name: "grey",
  },
  {
    id: 5,
    name: "blue",
  },
  {
    id: 6,
    name: "black",
  },
  {
    id: 7,
    name: "green",
  },
  {
    id: 8,
    name: "white",
  },
];

function Sidecolors(props) {
  const { colors, updateColors } = props;

  function colorClick(e){
      // console.log(e.currentTarget.getAttribute('name'))
      updateColors(e.currentTarget.getAttribute('name'))
  }

  function renderColors() {
    return colorList.map((product) => {
      
      return (
        <li key={product.id}>
          <div
            to="#"
            className={product.id}
            name={product.id}
            onClick={(e)=>{colorClick(e)}}
            style={{
              backgroundColor: `${product.name}`,
              width: "30px",
              height: "30px",
              display: "block",
              borderRadius: "50%",
              position: "relative",
              zIndex: "1",
              boxShadow: "0 0 3px rgba(0, 0, 0, 0.15)",
              border: `${colors === product.id ? "1px solid black" : "none"}`,
              cursor: 'pointer'
            }}
          ></div>
        </li>
      );
    });
  }
  return (
    <div className="widget color mb-50">
      <h6 className="widget-title mb-30">Color</h6>
      <div className="widget-desc">
        <ul className="d-flex">{renderColors()}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    colors: store.app.colors,
    isLoading: store.app.isLoading.goods || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateColors: (param) => dispatch(updateColors(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidecolors);
