export default function setCookieOnReq(cookies) {
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie:
        `${cookies.get("accessToken")?.name}=${
          cookies.get("accessToken")?.value
        }; ${cookies.get("refreshToken")?.name}=${
          cookies.get("refreshToken")?.value
        }` || "-",
    },
  };
  return options;
}
