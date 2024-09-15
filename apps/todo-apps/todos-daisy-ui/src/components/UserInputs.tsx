import { Link } from "react-router-dom";
// import { InputUi } from "yw-daisyui";
import InputUi from "./InputUi";

const userProps = {
  username: 'Username',
  email: 'Email',
  password: 'Password',
}

type Data = {
  title: string,
  btn: string,
  link: {
    path: string,
    label: string,
  },
}

type Props = {
  page: 'login' | 'signup',
  data: Data
}

const UserInputs = ({ page, data }: Props) => {

  return (
    <div key={page} className='w-full flex flex-col justify-center items-center'>
      <div className='w-[50%] gap-4 flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <div className='w-full gap-2 flex flex-col justify-center items-center'>
          {Object.entries(userProps).map(([key, value]) => (
            <InputUi type={key} key={key} id={key} position="left" label={value} />
          ))}
        </div>
        <button className="btn btn-primary" type="button">{data.title}</button>
        <p><Link to={data.link.path}>{data.link.label}</Link></p>
      </div>
    </div>
  );
}

export default UserInputs;
