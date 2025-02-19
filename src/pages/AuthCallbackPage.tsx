import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;



















// import { useCreateMyUser } from "@/api/MyUserApi";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthCallbackPage = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth0();
//   const { createUser, isError, error } = useCreateMyUser();

//   const hasCreatedUser = useRef(false);

//   useEffect(() => {
//     const createUserAndNavigate = async () => {
//       if (user?.sub && user?.email && !hasCreatedUser.current) {
//         try {
//           await createUser({ auth0Id: user.sub, email: user.email });
//           hasCreatedUser.current = true;
//         } catch (error) {
//           console.error("Failed to create user:", error);
//         }
//       }
//       navigate("/");
//     };

//     createUserAndNavigate();
//   }, [createUser, navigate, user]);

//   if (isError) {
//     // Check if the error is an instance of Error
//     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
//     return <div>Error: {errorMessage}</div>;
//   }

//   return <>Loading...</>;
// };

// export default AuthCallbackPage;