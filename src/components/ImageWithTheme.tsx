import Image from 'next/future/image';

export default function ImageWithTheme(props: any) {
  return <Image alt={props.alt} src={props.dark} {...props} />;
}
