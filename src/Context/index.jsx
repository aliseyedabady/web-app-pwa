import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { API_SERVER } from "../Server";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    lang: JSON.parse(localStorage.getItem("lang")) || "fa",
  };
  const [state, setState] = useState(initialState);

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.access_token) {
    axios.defaults.headers["Authorization"] = `Bearer ${user.access_token}`;
  }
  const server = axios.create({
    baseURL: API_SERVER,
    headers: {
      "Accept-Language": JSON.parse(localStorage.getItem("lang")) || "fa",
    },
  });
  const dispatch = (key, value) => {
    if (value) {
      setState({ ...state, [key]: value });
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      const newState = { ...state };
      delete newState[key];
      setState({ newState });
      localStorage.removeItem(key);
    }
  };
  const post = async (url, body, message = false) => {
    try {
      const response = await server.post(url, body);
      if (message && response.data.message) {
        toast.success(response.data.message);
      }
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          return {};
        case 401:
          if (data.message) {
            toast.error(data.message);
          }
          localStorage.clear();
          window.location.replace("/login");
          break;
        case 500:
          toast.error(data.message);
          break;
        case 422:
          return { data: data, status: 422 };
        default:
          toast.error(data.message);
          break;
      }
      return {};
    }
  };
  const put = async (url, body, message = false) => {
    try {
      const response = await server.post(url, { _method: "PUT", ...body });
      if (message && response.data.message) {
        toast.success(response.data.message);
      }
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          return {};
        case 401:
          if (data.message) {
            toast.error(data.message);
          }
          if (data.message) {
            toast.error(data.message);
          }
          localStorage.clear();
          window.location.replace("/login");
          break;
        case 500:
          toast.error(data.message);
          break;
        case 422:
          if (typeof data.errors == "string") {
            toast.error(data.errors);
          } else {
            Object.keys(data.errors).map(key => {
              data.errors[key].map(item => {
                toast.error(item);
              });
            });
          }

          break;

        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const get = async (url, body, message = false) => {
    try {
      const response = await server.get(url);

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          return {};
        case 401:
          if (data.message) {
            toast.error(data.message);
          }
          localStorage.clear();
          window.location.replace("/login");
          break;
        case 500:
          toast.error(data.message);
          break;
        case 422:
          if (typeof data.errors == "string") {
            toast.error(data.errors);
          } else {
            Object.keys(data.errors).map(key => {
              data.errors[key].map(item => {
                toast.error(item);
              });
            });
          }

          break;
        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const del = async (url, body, message = false) => {
    try {
      const response = await server.delete(url, { _method: "DELETE" });

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const {
        response: { status, data },
      } = error;
      switch (+status) {
        case 400:
          toast.error(data.message);
          return {};
        case 401:
          if (data.message) {
            toast.error(data.message);
          }
          if (data.message) {
            toast.error(data.message);
          }
          localStorage.clear();
          window.location.replace("/login");
          break;
        case 500:
          toast.error(data.message);
          break;
        case 422:
          if (typeof data.errors == "string") {
            toast.error(data.errors);
          } else {
            Object.keys(data.errors).map(key => {
              data.errors[key].map(item => {
                toast.error(item);
              });
            });
          }

          break;
        default:
          toast.error(data.message);

          break;
      }
      return {};
    }
  };
  const logout = async () => {
    setState({ ...state, loading: true });
    const { status } = await post("/logout");
    if (+status === 200) {
      setState({ ...state, loading: false });

      localStorage.removeItem("user");
      window.location.replace("/login");
    }
    setState({ ...state, loading: false });
  };

  const isLogin = () => {
    return state?.user?.access_token ? true : false;
  };
  return (
    <context.Provider
      value={{ state, dispatch, post, logout, put, del, get, isLogin }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
export const useMainContext = () => {
  return useContext(context);
};
