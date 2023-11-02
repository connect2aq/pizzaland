import Image from 'next/image';

const SizeSelection = ({ pizza, size, setSize }) => {
  console.log('size', size);
  return (
    <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
      <div className="flex gap-x-12 items-baseline font-medium">
        <label className="flex flex-col items-center cursor-pointer">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="Pizza Size Selection image"
            className={`${
              size === 'small'
                ? 'border-2 border-orange p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            } mb-1`}
          ></Image>
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === 'small'}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            className="appearance-none"
          ></input>
          Small
        </label>

        <label className="flex flex-col items-center cursor-pointer">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt="Pizza Size Selection image"
            className={`${
              size === 'medium'
                ? 'border-2 border-orange p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            } mb-1`}
          ></Image>
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === 'medium'}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            className="appearance-none"
          ></input>
          Medium
        </label>

        <label className="flex flex-col items-center cursor-pointer">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt="Pizza Size Selection image"
            className={`${
              size === 'large'
                ? 'border-2 border-orange p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            } mb-1`}
          ></Image>
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === 'large'}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            className="appearance-none"
          ></input>
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
