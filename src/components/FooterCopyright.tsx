export type FooterCopyrightProps = {
  copyrightText: string;
};

export function FooterCopyright({ copyrightText }: FooterCopyrightProps) {
  return <p className="copyright text-center m0">{copyrightText}</p>;
}
