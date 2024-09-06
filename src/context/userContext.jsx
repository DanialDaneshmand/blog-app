"use client";
import { createContext, useEffect } from "react";
import { getUserApi, signInApi, signUpApi } from "@/services/authServices";
import React, { useContext, useReducer } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "signup":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case "signin":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case "user/loaded":
      return {
        ...state,
        loading: false,
        user: action.payload||{},
        isAuthenticated: true,
      };
  }
};

function UserProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    userReducer,
    initialState
  );
  const router = useRouter();
  async function signin(data) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signInApi(data);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(errorMessage);
    }
  }
  async function signup(data) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signUpApi(data);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(errorMessage);
    }
  }
  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: error });
      toast.error(errorMessage);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("not found user context");
  return context;
}
