import React from "react";
import { motion } from "framer-motion";

const RecipeMason = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5">
        <div className="row-span-2">
          <img src="/mason-1.png" alt="" />
        </div>
        <div className="row-span-2 col-start-1 row-start-3">
          <img src="/mason-2.png" alt="" />
        </div>
        <div className="col-start-1 row-start-5">
          <img src="/mason-3.png" alt="" />
        </div>
        <div className="row-span-3 col-start-2 row-start-1">
          <img src="/mason-4.png" alt="" />
        </div>
        <div className="row-span-2 col-start-2 row-start-4">
          <img src="/mason-5.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default RecipeMason;
