import React, { useEffect, useState } from "react";
import axios from "axios";
function UseNewsFetch(category, subcategory, type, tag, limit, order) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {};
        if (category) {
          params.category = category;
          if (subcategory) {
            params.subcategory = subcategory;
          }
        }
        if (type) {
          params.type = type;
        }
        if (tag) {
          params.tag = tag;
        }
        if (limit) {
          params.limit = limit;
        }
        if (order) {
          params.order = order;
        }
        const response = await axios.get("http://localhost:8080/api/news", {
          params,
        });
        setData(response.data);
      } catch (error) {
        console.log("Error is : ", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, [category, subcategory, type, tag, limit, order]);
  return { data, loading, error };
}

export default UseNewsFetch;
