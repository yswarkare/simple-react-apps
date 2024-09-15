import UserInputs from "../components/UserInputs";
import paths from "../routes/path";

const SignUp = () => {
  return (
    <div className="w-full flex">
      <UserInputs page='signup' data={{
        title: "Sign Up",
        btn: 'Sign Up',
        link: {
          label: 'Go to login page',
          path: paths.login,
        }
      }} />
    </div>
  );
}

export default SignUp;
