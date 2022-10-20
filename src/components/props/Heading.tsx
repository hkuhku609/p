type HeadingProps = {
  //update
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
