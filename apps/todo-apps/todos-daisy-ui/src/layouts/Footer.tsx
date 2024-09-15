import { SelectTheme } from 'yw-daisyui'

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-end">
        <SelectTheme themes={['light', 'dark', "altDark"]} />
      </div>
    </div>
  );
}

export default Footer;
