import BodyDark from "@/components/classes/BodyDark";
import LayoutV6 from "@/components/layouts/LayoutV6";
import Content from "@/components/shop/Content";
import React from "react";

const Dark = () => {
  return (
    <>
      <LayoutV6 breadCrumb="shop" title="Special Food">
        <Content />
        <BodyDark />
      </LayoutV6>
    </>
  );
};

export default Dark;
