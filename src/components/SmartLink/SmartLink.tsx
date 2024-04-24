import * as React from "react";
import Link from "next/link";
import { isExternalLink } from "@/src/lib/utils";

export type SmartLinkProps = {
  href: string;
  children: React.ReactNode;
  classNames?: string;
  onPress?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export function SmartLink({
  href,
  children,
  classNames,
  onPress,
}: SmartLinkProps) {
  const handleOnPress = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onPress) {
        event.preventDefault();
        onPress();
      }
    },
    [onPress],
  );
  return isExternalLink(href) ? (
    <a
      className={classNames ? classNames : undefined}
      onClick={handleOnPress}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={href} onClick={handleOnPress}>
      {children}
    </Link>
  );
}

export default SmartLink;
