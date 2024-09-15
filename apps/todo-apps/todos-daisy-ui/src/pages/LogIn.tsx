import UserInputs from "../components/UserInputs";
import paths from "../routes/path";

const LogIn = () => {
  return (
    <div className="w-full flex">
      <UserInputs page="login" data={{
        title: "Log In",
        btn: 'Log In',
        link: {
          label: 'Go to sign up page',
          path: paths.signup,
        }
      }} />
    </div>
  );
}

export default LogIn;
