import styles from './Container.module.css';

export const Container = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const finalClassName = `${styles.container}${
    className ? ' ' + className : ''
  }`;

  return <div className={finalClassName} {...props} />;
};
