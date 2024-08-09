"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const GoBack = () => {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
      Go Back
    </button>
  );
};
