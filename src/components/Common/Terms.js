import React, { useEffect, useState } from "react";
import { getTerms } from "../../api/common";
import Loader from "../Common/Loader";

const Terms = () => {
  const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState(undefined);

    const getDetails = async () => {
        try {
            setLoading(true);
            const data = await getTerms();
            console.log(data);
            setDetails(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }
    
useEffect(() => {
    getDetails();
}, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="container  "
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="row">
            <h2 style={{ color: "white", fontSize: "2rem" }}>
              Terms and Conditions
            </h2>
          </div>
          <div className="row">
            <p>{details && details.content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Terms;
