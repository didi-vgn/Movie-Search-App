type Props = {
  text: string;
  // onClick: () => void;
};

export default function RoundedButton(props: Props) {
  return (
    <button className='text-xs rounded-full bg-slate-700 p-1'>
      {props.text}
    </button>
  );
}
