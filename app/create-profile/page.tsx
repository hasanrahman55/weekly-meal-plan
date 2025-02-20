"use client";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type ApiResponse = {
  message: string;
  error?: string;
};

async function createProfileRequest() {
  const res = await fetch("/api/create-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data as ApiResponse;
}
function CreateProfile() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const { mutate, isPending } = useMutation<ApiResponse, Error>({
    mutationFn: createProfileRequest,
    onSuccess: (data) => {
      router.push("/subscribe");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (isLoaded && isSignedIn && !isPending) {
      mutate();
    }
  }, [isLoaded, isSignedIn]);

  return <div>Processing sign in ...</div>;
}

export default CreateProfile;
