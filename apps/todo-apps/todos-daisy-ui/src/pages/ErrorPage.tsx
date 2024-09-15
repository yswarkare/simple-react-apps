import { Link } from "react-router-dom";

type Props = {
  errors: string[]
}

const ErrorPage = ({ errors }: Props) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-red-500 text-2xl">Error Page</p>
      <ul className="flex flex-col justify-start items-start">
        {
          errors.map((err) => (
            <li key={err.slice(4)} className="text-red-500">{errors}</li>
          ))
        }
      </ul>
      <Link to="/" className="link link-primary">return back to home page</Link>
    </div>
  );
}

export default ErrorPage;
