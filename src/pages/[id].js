import React from "react";
import { useRouter } from "next/router";

const DynamicRouting = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p> Id je : {id} </p>
    </div>
  );
};
export default DynamicRouting;
