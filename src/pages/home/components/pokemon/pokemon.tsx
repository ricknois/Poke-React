type Props = {
  name: String;
  imgUrl: string;
  id: number;
};

export default function Pokemon({ name, imgUrl, id }: Props) {
  return (
    <div>
      <span>{id}</span>
      <span>{name}</span>
      <img src={imgUrl} alt={`${name} photo`} />
    </div>
  );
}
