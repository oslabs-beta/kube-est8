import React, { useEffect } from "react";

const PodInfo = (props) => {
  useEffect(() => {
    fetch("/metrics")
      .then((data) => data.body)
      .then(json => {console.log(json)})

      .catch((error) => console.log(error));
  }, []);

  return <div>PodInfo</div>;
};

export default PodInfo;
