import React, { useContext } from "react";
import alertContext from "../../context/alert/alertContext";
const Alert = () => {
  const AlertContext = useContext(alertContext);
  const { alert } = AlertContext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.clr}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
