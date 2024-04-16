import React from "react";

function ManagemnetComponent({
  children,
}: {
  withHero: boolean;
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

export default ManagemnetComponent;
