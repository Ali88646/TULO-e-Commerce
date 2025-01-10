import { requiredUser } from "@/hooks/requiresUser";

import React from "react";

const Orders = async () => {
  await requiredUser();
  return (
    <div>
      <b className="text-blue-600">Order Page</b>
    </div>
  );
};

export default Orders;
