"use client";
import { SimpleWidget } from "./SimpleWidget";

import { useAppSelector } from "../../store/index";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        label="Contador"
        title={counter.toString()}
        subtitle="Productos agregados"
        href={'/dashboard/counter'}
        icon={<IoCartOutline size={70} />}
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
