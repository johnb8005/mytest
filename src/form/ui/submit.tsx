import React from "react";

import Button from "../../common/button/btn";
import Spinner from "../../common/spinner";

export interface UISUbmitProps {
  isLoading: boolean;
  label: string;
}

const UISubmit = ({ isLoading, label }: UISUbmitProps) => {
  return (
    <Button disabled={isLoading} type="submit">
      <>
        {isLoading && (
          <span className="flex flex-inline">
            <Spinner /> Loading
          </span>
        )}

        {!isLoading && label}
      </>
    </Button>
  );
};

export default UISubmit;
