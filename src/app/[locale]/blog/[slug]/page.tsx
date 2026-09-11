import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/** Extension seam for future posts — not used at MVP launch. */
export default async function BlogPostStubPage(_props: Props) {
  notFound();
}
